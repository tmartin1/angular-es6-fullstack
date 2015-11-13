(function () {
    'use strict';

    describe('Dashboard controller', function () {
        beforeEach(module('skeletonApp'));

        var vm;
        beforeEach(inject(function ($controller) {
            vm = $controller('DashboardController');
        }));

        it('should define more than 5 awesome things', function () {
            expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
            expect(vm.awesomeThings.length > 5).toBeTruthy();
        });
    });

})();
