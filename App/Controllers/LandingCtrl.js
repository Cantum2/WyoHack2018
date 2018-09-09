var app = angular.module('myApp');

app.controller('LandingCtrl', function($scope, $http){

  $scope.showRegister = false;
  $scope.showFormSuccess = false;
  $scope.showForError = false;

  $scope.showRegisterForm = function(){
    $scope.showRegister = true;
  }

  $scope.submitForm = function(){
    let userData = $scope.user;
    console.log(userData);
    $http.post('/setuseremails', userData).then(function(success, error){
      if(success){
        $scope.showFormSuccess = true;
        $scope.user.email = "";
        $scope.user.firstName = "";
        alert('Thank you!')
      }else{
        $scope.showForError = true;
      }
    })
  }
  console.log('discoverCtrl');
  console.log('Hi from landing ctrl');
})
