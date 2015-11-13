// Import services.
import GithubService from './githubContributor.service';
import WebDevTecService from './webDevTec.service';

let serviceModule = 'skeletonApp.service';

angular.module(serviceModule, [])
    .service('githubContributor', GithubService)
    .service('webDevTec', WebDevTecService);

// Export service module.
export default serviceModule;
