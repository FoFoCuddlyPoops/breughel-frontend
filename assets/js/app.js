'use strict';
require('angular');
require('./app-bootstrap.js');

(function () {
  var app = angular.module('breughel',
    [
      'breughel.module.admin'
    ]);
})();