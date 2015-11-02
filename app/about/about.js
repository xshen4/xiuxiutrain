'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'About'
  });
}])

.controller('About', function($scope) {
  $scope.image = 'about/images/xiu.png';
});