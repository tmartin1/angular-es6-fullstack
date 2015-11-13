class DashboardController {
    constructor ($timeout, webDevTec, toastr) {
        this.awesomeThings = [];
        this.classAnimation = '';
        this.creationDate = 1447251572800;
        this.toastr = toastr;
        this.activate($timeout, webDevTec);
    }

    activate ($timeout, webDevTec) {
        this.getWebDevTec(webDevTec);
        $timeout(() => {
            this.classAnimation = 'rubberBand';
        }, 5000);
    }

    getWebDevTec (webDevTec) {
        this.awesomeThings = webDevTec.getTec();

        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }

    showToastr () {
        this.toastr.info(`
            Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank">
                <b>generator-gulp-angular</b></a>
        `);
        this.classAnimation = '';
    }
}

export default DashboardController;
