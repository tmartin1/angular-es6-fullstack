# skeletonApp Coding Standards
This summarizes the coding standards (that I'm trying to adhere to) for skeletonApp.


## Table of Contents

1. [Front End](#front-end)
    1. [Application Structure](#application-structure)
    1. [ES6](#es6)
    1. [Angular](#angular)
    1. [HTML](#html)
    1. [SASS](#sass)
1. [Back End](#back-end)
    1. [Express](#express)


# Front End
This app follows Todd Motto's AngularJS Style Guide for code and we use John Papa's Folder structure:
* [Application Structure](https://github.com/johnpapa/angular-styleguide#application-structure)
* [Code Style](https://github.com/toddmotto/angularjs-styleguide)

_I highly recommend reading both Todd Mottos' and John Papa's guides to better understand the details and to get an idea as to why they made the decisions the way they did._

## Application Structure
As mentioned above, we're following [John Papa's guide](https://github.com/johnpapa/angular-styleguide#application-structure) for folder structure. Summarized below:

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


## ES6
Some quick notes on ES6 (more reading below and tutorial to follow).

* **Modules** are built in to ES6, making the barrier to adopting them very low. Modules are stored in files and there is exactly one module per file and one file per module. Modules can have a single default export or multiple named exports. Below is a simple example of a module with a single export and a module with multiple exports.

    Example of a module with a single export:
    ```javascript
    // someModule.js
    export function someFunction (x) {
        // ···
    }

    // app.js
    import someFunction from 'someModule.js';
    someFunction(33);
    ```

    Example of a module with multiple named exports:
    ```javascript
    // lib.js
    export const sqrt = Math.sqrt;

    export function square (x) {
        return x * x;
    }

    export function diag (x, y) {
        return sqrt(square(x) + square(y));
    }

    // app.js
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
    ```

    _Note: This is a very brief and not comprehensive explanation of modules. Please refer to [Exploring ES6, Chapter 17](http://exploringjs.com/es6/ch_modules.html) for more details._

* **No more IIFEs**, use block scoped modules instead:
    ```javascript
    // someModule.js
    let count = 0; // module-private variable

    export function someFunction (x) {
        count++;
        // ···
    }

    // app.js
    import { someFunction } from 'someModule.js';
    someFunction(33);
    ```

    *Why?*: This module does not produce a global variable and can be used as follows.

* **Default Parameter Values** can and should be implemented in a much cleaner, more beautiful way:
    ```javascript
    function foo (x=3, y=x) {
        // ...
    }

    foo();     // x=3; y=3
    foo(7);    // x=7; y=7
    foo(7, 2); // x=7; y=2
    ```

    _Note: The default values are only triggered when the argument is `undefined`. It does not trigger for any falsy value._

* **Rest Parameters** means no more `arguments` and no more `var args = Array.prototype.slice.apply(arguments)`:
    ```javascript
    // ECMAScript 5: arguments
    function logAllArguments () {
        for (var i=0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    // ECMAScript 6: rest parameter
    function logAllArguments (...args) {
        for (let arg of args) {
            console.log(arg);
        }
    }

    // Can also be used with named parameters to catch trailing arguments:
    function alertNameAndLogArguments (name, ...args) {
        alert('Hello' + name);
        for (let arg of args) {
            console.log(arg);
        }
    }
    ```

* **Classes** are something that's new to JavaScript, ES6 is really just providing a more convenient syntax for constructor functions. An example of a class and subclass might look like:
    ```javascript
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return `(${this.x}, ${this.y})`;
        }
    }

    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y);
            this.color = color;
        }
        toString() {
            return super.toString() + ' in ' + this.color;
        }
    }
    ```

_Note: The list above is a greatly abbreviated summary of just a few of the changes between ES5 and ES6. I highly recommend reading Exploring ES6 (link below) for more information, details, and examples._

**[Exploring ES6](http://exploringjs.com/es6/)** is a great resource for getting started with ES6. If you're familiar with JS already, it's a fairly quick read. If you're just going to skim it, I recommend at least looking over the following chapters:
* [4: Basics/Intro to ES6](http://exploringjs.com/es6/ch_first-steps.html)
* [7: New String Features](http://exploringjs.com/es6/ch_strings.html)
* [8: New Primitive Type: Symbols](http://exploringjs.com/es6/ch_symbols.html)
* [11: Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
* [12: Parameter Handling](http://exploringjs.com/es6/ch_parameter-handling.html)
* [16: Classes](http://exploringjs.com/es6/ch_classes.html)
* [17: Modules](http://exploringjs.com/es6/ch_modules.html)
* [18: New Array Features](http://exploringjs.com/es6/ch_arrays.html)
* If you're not familiar with maps and sets, [18: Maps and Sets](http://exploringjs.com/es6/ch_maps-sets.html)
* [22: Generators](http://exploringjs.com/es6/ch_generators.html)
* and [25: Promises](http://exploringjs.com/es6/ch_promises.html)


## Angular
As mentioned above, we follow [Todd Motto's AngularJS Style Guide](https://github.com/toddmotto/angularjs-styleguide) for code style. Summarized below.


#### Modules
- **Definitions**: Declare modules without a variable using the setter and getter syntax.

    ```javascript
    // Avoid
    var app = angular.module('app', []);
    app.controller();
    app.factory();

    // Recommended
    angular
        .module('app', [])
        .controller()
        .factory();
    ```

    - Note: Using `angular.module('app', []);` sets a module, whereas `angular.module('app');` gets the module. Only set once and get for all other instances.

- **Methods**: Pass classes into module methods rather than functions or as a callback.

    ```javascript
    // Never
    angular
        .module('app', [])
        .controller('MainCtrl', function MainCtrl () {
            // ...
        })
        .service('SomeService', function SomeService () {
            // ...
        });

    // Avoid
    angular
        .module('app', [])
        .controller('MainCtrl', MainCtrl)
        .service('SomeService', SomeService);

    function MainCtrl () {
        // ...
    }

    function SomeService () {
        // ...
    }

    // Recommended
    angular
        .module('app', [])
        .controller('MainCtrl', MainCtrl)
        .service('SomeService', SomeService);

    class MainCtrl {
        // ...
    }

    class SomeService {
        // ...
    }
    ```

    - This aids with readability and reduces the volume of code "wrapped" inside the Angular framework.


#### Controllers
- **Implement controllers as classes** rather than functions. For those used to working in more object oriented languages this probably seems very natural.
    ```javascript
    // Avoid
    function MainController () {
        var vm = this;
        vm.doSomething = doSomething;

        function doSomething () {
            // ...
        }
    }

    // Recommended
    class MainController {
        constructor () {
            this.someString = 'str';
        }
        doSomething () {
            // ...
        }
    }
    ```

    _Notice how this encourages us to put all of our bindable property declarations at the top of the class. This is another good design practice for Angular controllers that is made easier with ES6. This really helps to make the controller easier to understand._


#### Services
- Service is an overloaded term in general and Angular as well! The three types of services used are: Providers, Services and Factories. Out of them, Providers and Services are created as instances of types, while Factories are functions that return objects.

    **Example Service**
    ```javascript
    // some.service.js
    class SomeService {
        constructor ($http) {
            this.someData;
            this.$http = $http;
        }
        doSomething () {
            this.$http.get({
                /*...*/
            }).then(() => {
                // ...
            };
        }
    }

    export default SomeService;

    // app.js
    import SomeService from './some.service';

    angular
        .module('app', [])
        .service('SomeService', SomeService);
    ```

    **Example Factory**
    ```javascript
    // some.factory.js
    class SomeFactory {
        constructor ($http) {
            this.$http = $http;
        }
        doSomething () {
            this.$http.get({
                /*...*/
            }).then(() => {
                // ...
            };
        }
        static someFactory ($http) {
            return new SomeService($http);
        }
    }

    export default SomeService.someFactory;

    // app.js
    import SomeFactory from './some.factory';

    angular
        .module('app', [])
        .factory('SomeFactory', SomeFactory);
    ```


#### Directives

- **Directives with Classes**:
    ```javascript
    class MyDirective {
        constructor () {
            this.restrict = 'AE';
            this.templateUrl = 'path/to/template.html';
            this.scope = {
                twoWayAttribute: '=',
                readOnlyAttribute: '@',
                functionAttribute: '&'
            };
            this.controllerAs = 'vm';
            this.bindToController = true;
        }

        controller (someService) {
            // ...
        }

        link (scope, element, attributes) {
            // ...
        }

        static myFactory () {
            MyDirective.instance =  new MyDirective();
            return MyDirective.instance;
        }
    }
    export default MyDirective.myFactory;
    ```

- **Declaration restrictions**: Only use `custom element` and `custom attribute` methods for declaring your Directives (`{ restrict: 'EA' }`) depending on the directive's role.

    ```html
    <!-- Avoid -->
    <div class="my-directive"></div>


    <!-- Recommended -->
    <div my-directive></div>
    <!-- or -->
    <my-directive></my-directive>
    ```

    - Comment and class name declarations are confusing and should be avoided. Comments do not play nicely with older versions of IE. Using an attribute is the safest method for browser coverage.

- **Templates**: Use ES6's ` ` feature for multiline templates instead of `Array.join('')` or `+`.

    ```javascript
    // Bad
    class MyDirective {
        constructor () {
            return {
                template: [
                    '<div class="some-directive">',
                    '<h1>My directive</h1>',
                    '</div>'
                ].join('')
            };
        }
    }

    // Worse
    class MyDirective {
        constructor () {
            return {
                template: '<div class="some-directive">' +
                    '<h1>My directive</h1>' +
                    '</div>'
            };
        }
    }

    // Recommended
    class MyDirective {
        constructor () {
            this.template: `
                <div class="some-directive">
                    <h1>My directive title</h1>
                </div>`;
        }
    }
    ```

    *Why?*: Improves readability as code can be indented properly.

- **DOM manipulation**: Takes place only inside directives, never a controller/service.

    ```javascript
    // Avoid
    class SomeController {
        $('.dragzone').on('click', () => {
            // Handle drop functionality.
        });
    }

    // Recommended
    class SomeDirective {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                element.on('click', () => {
                    // Handle drop functionality.
                });
            }
        };
    }
    ```

- **Naming conventions**: Never `ng-*` prefix custom directives, they might conflict future native directives.

    ```javascript
    // Avoid
    // <div ng-upload></div>

    class ngUpload {
        // ...
    }

    // Recommended
    // <div drag-upload></div>

    class dragUpload {
        // ...
    }
    ```

    - Directives and Filters are the _only_ providers that have the first letter as lowercase; this is due to strict naming conventions in Directives. Angular hyphenates `camelCase`, so `dragUpload` will become `<div drag-upload></div>` when used on an element.

- **controllerAs**: Use the `controllerAs` syntax inside directives as well.

    ```javascript
    // Recommended
    class SomeDirective {
        constructor () {
            return {
                controller: DragUploadController,
                controllerAs: 'vm'
            };
        }
    }

    class DragUploadController {
        // ...
    }
    ```

## HTML
- Use `ui-sref` rather than `href` when possible.

    ```html
    <!-- Avoid -->
    <a href="#url">
        Link Text
    </a>

    <!-- Recommended -->
    <a data-ui-sref="stateName">
        Link Text
    </a>
    ```

- Preface any angular attribute with the `data-` tag.

    ```html
    <!-- Avoid -->
    <button ng-click="vm.someFunction()">
        {{ vm.buttonText }}
    </button>

    <!-- Recommended -->
    <button data-ng-click="vm.someFunction()">
        {{ vm.buttonText }}
    </button>
    ```

- Minimize use of IDs in markup and don't use ids for CSS styling, use classes instead. And NEVER use inline styling.

    *Why?*: Excessive use of IDs can contribute to CSS maintainability issues like specificity conflicts and accidental ID naming collisions.

    ```html
    <!-- Never -->
    <div id="globalHeader" style="IfYouEverThinkThisIsOkay: 'ItsNot'">
        <div id="mmWrap">
            <nav id="mmPanel">
                <a ui-sref="stateName" class="mmLink">Some Link</a>
            </nav>
        </div>
    </div>

    <!-- Avoid -->
    <div id="globalHeader">
        <div id="mmWrap">
            <nav id="mmPanel">
                <a ui-sref="stateName" class="mmLink">Some Link</a>
            </nav>
        </div>
    </div>

    <!-- Recommended -->
    <div id="globalHeader">
        <div class="mmWrap">
            <nav class="mmPanel">
                <a ui-sref="stateName" class="mmLink">Some Link</a>
            </nav>
        </div>
    </div>
    ```

## SASS
- Limit Sass nesting to 5 levels at most. There may be edge cases where deeper nesting is necessary, but usually 3-5 levels of nesting is all that you'll need.

    *Why?*: Leaner selectors lead to smaller CSS files and the selectors themselves tend to be easier to read. Needing more than 5 selectors usually signals a specificity issue elsewhere in your styles.

# Back End
// TODO: this

## Express
// TODO: this
