'use strict';

require('angular');
require('angular-ui-router');
require('./users/index.js');
module.exports = angular.module('breughel.module.admin', ['ui.router', 'breughel.module.admin.users']);