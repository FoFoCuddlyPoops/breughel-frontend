'use strict';
require('angular');
require('angular-ui-router');

module.exports = angular.module('breughel.module.admin.profile', ['ui.router']);

// Routes file
require('./profileRoutes.js');

// Controllers
//require('Modules/Admin/Profile/Controllers/EditProfilesController.js');