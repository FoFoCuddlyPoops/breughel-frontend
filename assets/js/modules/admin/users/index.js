'use strict';
module.exports = angular.module('breughel.module.admin.users', ['ui.router']);

// Routes file
require('./userRoutes.js');

// Controllers
require('./controllers/indexController.js');
require('./controllers/createController.js');