define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars) {
    'use strict';

    return Backbone.View.extend({
        template: Handlebars.templates.browseContractor,
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});