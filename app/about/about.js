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
      'content' : 'A user experience and implementation of the user interface go hand in hand.  As a front end engineer, working closely with UX Designers to develop a product that is user friendly and responsive is the ultimate goal.'
    },
    'api': {
      'class': 'fa fa-key',
      'title' : 'API',
      'content': 'They key to a strong product, the application program interface of any feature is one of the most important parts of the tech stack.  A strong API is the first test in how you can handle robust authentication, passthrough logic and resource operations in a scalable and reliable way.'
    },
    'backend' : {
      'class' : 'fa fa-heartbeat',
      'title' : 'Backend',
      'content' : 'If a product is large enough and compartmentalized to have these services pulled out of the API, they are the heart of multiple features.  They usually contain the business logic for specific components and are the services that actually write, read, update or delete resources in the databases.'
    },
    'database' : {
      'class' : 'fa fa-database',
      'title' : 'Data',
      'content' : 'Data storage is one of the most interesting parts of designing an application.  This is where you decide what information you need in order to solve the problem at hand and determine how to access the information so that data retrieval is reliable and consistent.'
    },
    'deploy' : {
      'class' : 'fa fa-ship',
      'title' : 'Deployment',
      'content' : 'Continuous deployment is one of the most important parts of software development.  Shipping a new version of a product or feature with little to no downtime, running automated tests/verification and having easily implemented rollback procedures are essential to having an consistently improving product that customers use without interruption.'
    }
  };

  $scope.links = {
    'github' : {
      'class' : 'fa fa-github',
      'link' : 'https://github.com/xshen4/'
    },
    'linkedin' : {
      'class' : 'fa fa-linkedin',
      'link' : 'https://www.linkedin.com/in/xiuli-shen-7b925646'
    },
    'email' : {
      'class' : 'fa fa-envelope',
      'link' : 'mailto:xiuli.j.shen@gmail.com?Subject=Hi%20Xiuli!'
    }
  }

  $scope.renderedContent = $scope.favorite_things.front_end.content;

  $scope.renderContent = function (content) {
    $scope.renderedContent = content;
  }
});