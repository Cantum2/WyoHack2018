var app = angular.module('myApp');

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/landing', {
    templateUrl: 'App/Views/Landing.html',
    controller: 'LandingCtrl'
  })
  .when('/discover', {
    templateUrl: 'App/Views/Discover.html',
    controller: 'DiscoverCtrl'
  })
  .when('/documents', {
    templateUrl: 'App/Views/Documents.html',
    controller: 'DocumentsCtrl'
  })
  .when('/team', {
    templateUrl: 'App/Views/Team.html',
    controller: 'TeamCtrl'
  })
  .when('/roadmap', {
    templateUrl: 'App/Views/Roadmap.html',
    controller: 'RoadmapCtrl'
  })
  .when('/faq', {
    templateUrl: 'App/Views/Faq.html',
    controller: 'FaqCtrl'
  })
  .otherwise({
    redirectTo: '/landing'
  });
}])
