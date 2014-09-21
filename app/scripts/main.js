require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        bootstrapAffix: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix',
        bootstrapAlert: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert',
        bootstrapButton: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/button',
        bootstrapCarousel: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel',
        bootstrapCollapse: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse',
        bootstrapDropdown: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown',
        bootstrapModal: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal',
        bootstrapPopover: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover',
        bootstrapScrollspy: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy',
        bootstrapTab: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab',
        bootstrapTooltip: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip',
        bootstrapTransition: '../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition',
        handlebars: '../bower_components/handlebars/handlebars',
        templates: '/handlebars/templates',
        underscore: '../bower_components/underscore/underscore',
        firebase: '../bower_components/firebase/firebase',
        backfire: '../bower_components/backfire/backbone-firebase.min'
    },
    shim: {
        firebase: {
            exports: 'Firebase'
        },
        backfire: {
            deps: [
                'backbone',
                'firebase'
            ],
            exports: 'Backbone'
        },
        templates: {
            deps: [
                'handlebars'
            ]
        },
        handlebars: {
            exports: 'Handlebars'
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        bootstrapAffix: {
            deps: [
                'jquery'
            ]
        },
        bootstrapAlert: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapButton: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCarousel: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapCollapse: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapDropdown: {
            deps: [
                'jquery'
            ]
        },
        bootstrapModal: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapPopover: {
            deps: [
                'jquery',
                'bootstrapTooltip'
            ]
        },
        bootstrapScrollspy: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTab: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapTooltip: {
            deps: [
                'jquery',
                'bootstrapTransition'
            ]
        },
        bootstrapTransition: {
            deps: [
                'jquery'
            ]
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['router', 'backbone', 'jquery'], function (Router, Backbone, $) {
    'use strict';

    $(function () {
        new Router();
        Backbone.history.start();
    });
});
