function dashboardRoutes ($stateProvider) {
    'use strict';

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
        });
}

export default dashboardRoutes;
