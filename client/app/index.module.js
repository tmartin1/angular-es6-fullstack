// Import default config files.
import config from './index.config';
import routerConfig from './index.router';
import runBlock from './index.run';

// Import angular modules.
import commonModule from './common/common.module';
import loginModule from './login/login.module';
import dashboardModule from './dashboard/dashboard.module';

angular.module('skeletonApp', [
        commonModule,
        dashboardModule,
        loginModule
    ])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock);
