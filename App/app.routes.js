var app = angular.module('myApp');

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/landing', {
    templateUrl: 'App/Views/Landing.html',
    controller: 'LandingCtrl'
  })
  .otherwise({
    redirectTo: '/landing'
  });
}])
