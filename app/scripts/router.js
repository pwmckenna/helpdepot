define([
    'backbone',
    'collections/contractor.list',
    'views/contractor.list.view'
], function (Backbone, ContractorList, ContractorListView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            'contractors': 'contractors',
            'contractor/:id': 'contractor',
            '*path': 'unknown'
        },
        execute: function (cb, args) {
            if (cb) {
                cb.apply(this, args);
            }
        },
        contractors: function () {
            this.collection = new ContractorList();
            this.view = new ContractorListView({
                collection: this.collection
            });
            $('body').html(this.view.render().el);
            console.log('router:contractors', arguments);
        },
        contractor: function () {
            console.log('router:contractor', arguments);
        },
        unknown: function () {
            console.log('router:unknown', arguments);
        }
    });
    return Router;
});