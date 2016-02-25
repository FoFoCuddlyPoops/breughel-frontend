'use strict';
var usersModule = require('./index.js');
var routes = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/admin/users');
    $stateProvider
      .state('users',{
        url: '/admin/users',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('users.index', {
        url: '/index',
        templateUrl: 'views/users/index.html',
        controller: 'IndexController'
      })
      .state('users.create', {
        url: '/create',
        templateUrl: 'views/users/create.html',
        controller: 'CreateController'
      })

  }];
usersModule.config(routes);