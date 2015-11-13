class NavbarDirective {
    constructor () {
        this.restrict = 'E';
        this.templateUrl = 'app/common/directives/navbar/navbar.html';
        this.scope = {
            creationDate: '='
        };
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    controller ($state, moment) {
        // "this.creation" is avaible by directive option "bindToController: true"
        this.relativeDate = moment(this.creationDate).fromNow();

        this.links = [{
            text: 'Home',
            sref: 'dashboard'
        }, {
            text: 'Logout',
            sref: 'login',
            click: () => $state.go('login')
        }];
    }

    static navbarFactory () {
        NavbarDirective.instance =  new NavbarDirective();
        return NavbarDirective.instance;
    }
}

export default NavbarDirective.navbarFactory;
