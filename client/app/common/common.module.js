import serviceModule from './services/service.module';
import directiveModule from './directives/directive.module';

let commonModule = 'skeletonApp.common';

angular.module(commonModule, [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    serviceModule,
    directiveModule
]);

export default commonModule;
