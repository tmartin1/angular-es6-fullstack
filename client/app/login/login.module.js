import LoginController from './login.controller';
import loginRouter from './login.router';

let loginModule = 'skeletonApp.login';

angular.module(loginModule, [])
    .controller('LoginController', LoginController)
    .config(loginRouter);

export default loginModule;
