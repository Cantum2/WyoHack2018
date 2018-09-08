let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'App/Views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/App/Views/index.html');
});

//Setting up Connection
app.listen(process.env.PORT || 3000, function(){
  console.log('Node is running on port 3000');
});
