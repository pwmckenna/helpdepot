define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars) {
    'use strict';

    return Backbone.View.extend({
        template: Handlebars.templates.home,
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
});