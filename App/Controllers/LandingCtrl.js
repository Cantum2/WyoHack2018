var app = angular.module('myApp');

app.controller('LandingCtrl', function($scope, $http){
  $scope.submitForm = function(){
    let userData = $scope.user;
    console.log(userData);
    $http.post('/setuseremails', userData).then(function(success, error){
      if(success){
        $scope.user.email = "";
        $scope.user.firstName = "";
        alert('Thank you!')
      }
    })
  }
})
