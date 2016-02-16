'use strict';

require('angular');
require('angular-ui-router');
require('modules/admin/profile/index.js');
require('modules/admin/education/index.js');
require('modules/admin/experience/index.js');
require('modules/admin/certificates/index.js');
require('modules/admin/account/index.js');

module.exports = angular.module('breughel.module.administration',
    [
        'ui.router',
        // All the administration submodules
        'breughel.module.administration.profile',
        'breughel.module.administration.education',
        'breughel.module.administration.experience',
        'breughel.module.administration.certificates',
        'breughel.module.administration.account'
    ]);