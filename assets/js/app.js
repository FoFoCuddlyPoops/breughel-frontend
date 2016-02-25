'use strict';
require('angular');
require('angular-ui-router');
require('./app-bootstrap.js');

(function () {
  var app = angular.module('breughel',
    [
      'breughel.module.admin'
    ]);
})();