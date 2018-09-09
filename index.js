let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let firebase = require('firebase');

let app = express();

var config = {
    apiKey: "AIzaSyBiqZapAJ0IrzCCx7OUjI1ZqOujqzNdhVU",
    authDomain: "etherradio-92967.firebaseapp.com",
    databaseURL: "https://etherradio-92967.firebaseio.com/",
    projectId: "etherradio-92967",
    storageBucket: "etherradio-92967.appspot.com",
    messagingSenderId: "1027368865444"
  };
firebase.initializeApp(config);

let fireabseDatabase = firebase.database();

app.set('views', path.join(__dirname, 'App/Views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/App/Views/index.html');
});

app.post('/setuseremails', function(req, res){
  const userEmail = req.body.email;
  let splitEmail = userEmail.split('.');
  const firstName = req.body.firstName;

  let firebaseRef = fireabseDatabase.ref('/useremails');
  firebaseRef.child('/useremails').child(splitEmail[0]).once('value', function(data){
    var userEmailInfo = data.val();
    if(userEmailInfo){
      console.log("This email exists");
      //do something
    }else{
      firebaseRef.child(splitEmail[0]).set(firstName);
    }
  })

  res.end();
})

//Setting up Connection
app.listen(process.env.PORT || 3000, function(){
  console.log('Node is running on port 3000');
});
