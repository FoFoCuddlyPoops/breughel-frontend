'use strict';
require('angular');
require('app-bootstrap.js');

(function() {
    var app = angular.module('breughel',
        [
            // All the parent modules
            'breughel.module.core',
            'breughel.module.services',
            'breughel.module.finder',
            'breughel.module.authentication',
            'breughel.module.authorization',
            'breughel.module.registration',
            'breughel.module.administration',
        ]);
})();