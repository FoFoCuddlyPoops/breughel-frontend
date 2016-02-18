'use strict';

// gets access to the parent module
var profileModule = require('./index.js');

var routes = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider,  $locationProvider){

    $urlRouterProvider.otherwise('/404');
    $stateProvider.state('admin.edit-profile', {
      url: '/profile/edit',
      templateUrl: 'views/admin/edit-profile.tpl.html',
      controller: 'EditProfileController',
      access: {
        requiresLogin: true,
        requiredPermissions: ['trainer'],
        permissionType: 'AtLeastOne'
      },
      resolve: {
        getMyProfile: ['ProfileService', function(ProfileService){
          var success = function(response) { return response.data.data.profile.data; }
          var error = function(response) { return response.data.data; }
          return ProfileService.me().then(success, error);
        }]
      }
    })

    $locationProvider.html5Mode(true);
  }];


profileModule.config(routes);