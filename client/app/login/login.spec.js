(function () {
    'use strict';

    describe('Login controller', function () {
        beforeEach(module('skeletonApp'));

        var vm;
        beforeEach(inject(function ($controller) {
            vm = $controller('LoginController');
        }));

        it('should initialize with blank email and password.', function () {
            expect(vm.credentials.email).toBeFalsy();
            expect(vm.credentials.password).toBeFalsy();
        });
    });

})();
