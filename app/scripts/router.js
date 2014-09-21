define([
    'jquery',
    'backfire',
    'views/browseContractor',
    'views/browseContractorList',
    'views/home',
    'views/login',
    'views/contractor'
], function (
    $,
    Backbone,
    BrowseContractorView,
    BrowseContractorListView,
    HomeView,
    LoginView,
    ContractorView
) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '': 'home',
            'browse/contractors': 'browseContractors',
            'browse/contractor/:id': 'browseContractor',
            'contractor': 'login',
            'contractor/:id': 'contractor',
            '*path': 'unknown'
        },
        execute: function (cb, args) {
            if (cb) {
                cb.apply(this, args);
            }
        },
        home: function () {
            var view = new HomeView();
            $('.content').html(view.render().el);
        },
        browseContractors: function () {
            var Collection = Backbone.Firebase.Collection.extend({
                firebase: 'https://helpdepot.firebaseio.com/contractors'
            });

            var view = new BrowseContractorListView({
                collection: new Collection()
            });
            $('.content').html(view.render().el);
        },
        browseContractor: function (id) {
            var Model = Backbone.Firebase.Model.extend({
                firebase: 'https://helpdepot.firebaseio.com/contractors/' + id
            });
            var view = new BrowseContractorView({
                model: new Model()
            });
            $('.content').html(view.render().el);
        },
        login: function () {
            var view = new LoginView();
            $('.content').html(view.render().el);
        },
        contractor: function (id) {
            var Model = Backbone.Firebase.Model.extend({
                firebase: 'https://helpdepot.firebaseio.com/contractors/' + id
            });
            var view = new ContractorView({
                model: new Model()
            });
            $('.content').html(view.render().el);
        },
        unknown: function () {
            throw new Error('unknown route');
        }
    });
});