'use strict';

require('angular');
require('angular-ui-router');
require('./profile/index.js');
module.exports = angular.module('breughel.module.admin',
  [
    'ui.router',
    // All the admin submodules
    'breughel.module.admin.profile',
  ]);