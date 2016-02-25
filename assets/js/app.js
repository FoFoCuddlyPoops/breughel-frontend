'use strict';
require('angular');
require('./app-bootstrap.js');
//require('../../bower_components/wow/dist/wow.js');
require('wow');

(function() {
    var app = angular.module('breughel',
        [
            // All the parent modules
            //'breughel.module.core',
            //'breughel.module.services',
            //'breughel.module.finder',
            //'breughel.module.authentication',
            //'breughel.module.authorization',
            //'breughel.module.registration',
            //'breughel.module.administration',
            //'breughel.module.admin',
            //'wowjs'
        ])
        .controller('Controller', ['$scope', function($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }])
        .directive('myCustomer', function() {
            return {
                template: 'Name: {{customer.name}} Address: {{customer.address}}'
            };
        })
        .config(function() {
            new WOW().init();
        });
})();