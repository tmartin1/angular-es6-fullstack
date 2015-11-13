// Import directives.
import NavbarDirective from './navbar/navbar.directive';
import MalarkeyDirective from './malarkey/malarkey.directive';

let directiveModule = 'skeletonApp.directive';

angular.module(directiveModule, [])
    .directive('acmeNavbar', NavbarDirective)
    .directive('acmeMalarkey', MalarkeyDirective);

// Export directive module.
export default directiveModule;
