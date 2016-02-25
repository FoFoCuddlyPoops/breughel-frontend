'use strict';

require('./users/index.js');
module.exports = angular.module('breughel.module.admin', ['ui.router', 'breughel.module.admin.users']).config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/admin/users/index');
    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>'
      });
  }]);