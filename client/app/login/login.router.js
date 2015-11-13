function loginRoutes ($stateProvider) {
    'use strict';

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            data: {
                pageTitle: 'Login'
            },
            controller: 'LoginController',
            controllerAs: 'vm'
        });
}

export default loginRoutes;
