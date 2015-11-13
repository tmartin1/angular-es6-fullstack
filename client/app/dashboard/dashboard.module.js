import DashboardController from './dashboard.controller';
import dashboardRouter from './dashboard.router';

let dashboardModule = 'skeletonApp.dashboard';

angular.module('skeletonApp.dashboard', [])
    .controller('DashboardController', DashboardController)
    .config(dashboardRouter);

export default dashboardModule;
