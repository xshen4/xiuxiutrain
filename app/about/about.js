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

  $scope.favorite_things = {
    'front_end': {
      'class' : 'fa fa-users',
      'title' : 'UX/UI',
      'content' : 'UX is kewl'
    },
    'api': {
      'class': 'fa fa-key',
      'title' : 'API'
    },
    'backend' : {
      'class' : 'fa fa-heartbeat',
      'title' : 'Backend'
    },
    'database' : {
      'class' : 'fa fa-database',
      'title' : 'Data'
    },
    'deploy' : {
      'class' : 'fa fa-ship',
      'title' : 'Deployment'
    }
  };
});