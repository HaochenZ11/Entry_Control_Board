var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.htm"
  })
  .when("/info", {
    templateUrl : "info.htm"
  })
  .when("/teams", {
    templateUrl : "teams.htm"
  })
  .when("/times", {
    templateUrl : "times.htm"
  })
  .when("/locations", {
    templateUrl : "locations.htm"
  });
});
