'use strict';
var usersModule = require('./index.js');
var routes = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/admin/users/index');
    $stateProvider
      .state('admin.users', {
        url: '/users',
        template: '<ui-view/>'
      })
      .state('admin.users.index', {
        url: '/index',
        templateUrl: 'views/users/index.html',
        controller: 'IndexController'
      })
      .state('admin.users.create', {
        url: '/create',
        templateUrl: 'views/users/create.html',
        controller: 'CreateController'
      });
  }];
usersModule.config(routes);