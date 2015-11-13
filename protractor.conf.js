'use strict';

exports.config = {
    // The address of a running selenium server. Will create new server if address is not provided.
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        // Chrome
        browserName: 'chrome',
        chromeOptions: {
            binary: '/Applications/Communications/Google\ Chrome.app/Contents/MacOS/Google Chrome',
            args: [],
            extensions: [],
        }

        // PhantomJS (Don't use PhantomJS for Protractor tests)
        // browserName: 'phantomjs',
        // 'phantomjs.binary.path': require('phantomjs').path,
        // /*
        // * Command line args to pass to ghostdriver, phantomjs's browser driver.
        // * See https://github.com/detro/ghostdriver#faq
        // */
        // 'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']

    },

    baseUrl: 'http://localhost:3333',

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: ['./e2e/**/*.spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
