class MalarkeyDirective {
    constructor () {
        this.restrict = 'E';
        this.scope = {
            extraValues: '='
        };
        this.template = '&nbsp;';
        this.controller = MalarkeyController;
        this.controllerAs = 'vm';
    }

    link (scope, element, attr, vm) {
        let watcher;
        let typist = malarkey(element[0], {
            typeSpeed: 40,
            deleteSpeed: 40,
            pauseDelay: 800,
            loop: true,
            postfix: ' '
        });

        element.addClass('acme-malarkey');

        angular.forEach(scope.extraValues, (value) => {
            typist.type(value).pause().delete();
        });

        watcher = scope.$watch('vm.contributors', () => {
            angular.forEach(vm.contributors, (contributor) => {
                typist.type(contributor.login).pause().delete();
            });
        });

        scope.$on('$destroy', () => {
            watcher();
        });
    }

    static malarkeyFactory () {
        MalarkeyDirective.instance =  new MalarkeyDirective();
        return MalarkeyDirective.instance;
    }
}

class MalarkeyController {
    constructor ($log, githubContributor) {
        this.$log = $log;
        this.contributors = [];
        this.activate(githubContributor);
    }

    activate (githubContributor) {
        return this.getContributors(githubContributor).then(() => {
            this.$log.info('Activated Contributors View');
        });
    }

    getContributors (githubContributor) {
        return githubContributor.getContributors(10).then((data) => {
            this.contributors = data;
            return this.contributors;
        });
    }
}

export default MalarkeyDirective.malarkeyFactory;
