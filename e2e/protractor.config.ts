import {Config} from 'protractor';

export let config: Config = {

    rootElement: 'my-app',
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    baseUrl: 'http://localhost:3001',
    specs: ['*e2e-spec.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};