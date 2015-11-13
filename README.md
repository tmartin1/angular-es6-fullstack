# skeletonApp

### Dependencies
[Node.js](https://nodejs.org/)<br>
[Bower](http://bower.io/) `sudo npm install -g bower`<br>


### Getting Started

1. Clone the git repo.

    ```
    git clone https://github.com/tmartin1/angular-es6-fullstack.git
    cd angular-es6-fullstack
    ```

1. Install dependencies.

    ```
    npm install
    bower install
    ```

1. Build and run.

    ```
    gulp serve
    ```


### Style Guide Overview

This app follows a modified version of Todd Motto's AngularJS Style Guide for code and we use John Papa's Folder structure:
* [Application Structure](https://github.com/johnpapa/angular-styleguide#application-structure)
* [Code Style](https://github.com/toddmotto/angularjs-styleguide)

_I highly recommend reading both Todd Mottos' and John Papa's guides to better understand the details and to get an idea as to why they made the decisions the way they did._


##### File and Folder Structure (front-end)

- Create folders named for the feature they represent. When a folder grows to contain more than 7-8 files, start to consider creating a folder for them. Your threshold may be different, so adjust as needed.

    *Why?*: A developer can locate the code, identify what each file represents at a glance, the structure is flat as can be, and there is no repetitive nor redundant names.

    *Why?*: The LIFT guidelines are all covered.

    *Why?*: Helps reduce the app from becoming cluttered through organizing the content and keeping them aligned with the LIFT guidelines.

    *Why?*: When there are a lot of files (10+) locating them is easier with a consistent folder structures and more difficult in flat structures.

    ```
    /**
     * Recommended (folders-by-feature).
     */

    app/
        index.module.js
        index.config.js
        common/
            common.module.js
            directives/
                common.directives.js
                directive.module.js
                navbar/
                    navbar.directive.js
                    navbar.directive.html
                    navbar.directive.scss
                header/
                    header.directive.js
                    header.directive.html
                    header.directive.scss
            services/
                auth.service.js
                common.services.js
                service.module.js
        dashboard/
            dashboard.controller.js
            dashboard.html
            dashboard.module.js
            dashboard.router.js
            dashboard.spec.js
            catalog/
                catalog.module.js
                catalog.router.js
                catalog.spec.js
                views/
                    brand/
                        brand.module.js
                        brand.router.js
                        brand.spec.js
                    inventory/
                        inventory.module.js
                        inventory.router.js
                        inventory.spec.js
        login/
            login.controller.js
            login.html
            login.module.js
            login.router.js
            login.spec.js
    ```

    Note: **Do not structure your app using folders-by-type.** This requires moving to multiple folders when working on a feature and gets unwieldy quickly as the app grows to 5, 10 or 25+ views and controllers (and other features), which makes it more difficult than folder-by-feature to locate files.

    ```
    /*
     * Do NOT do this (folders-by-type).
     */

    app/
        app.module.js
        app.config.js
        app.routes.js
        directives.js
        controllers/
            home.js
            login.js
            signup.js
            tutorial.js
        directives/
            calendar.directive.js
            calendar.directive.html
            user-profile.directive.js
            user-profile.directive.html
        services/
            auth.js
            dataservice.js
            localstorage.js
            logger.js
            spinner.js
        views/
            home.html
            login.html
            signup.html
            tutorial.html
            approved.html
            declined.html
    ```
