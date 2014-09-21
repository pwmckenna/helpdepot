define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars) {
    'use strict';

    return Backbone.View.extend({
        tagName: 'li',
        className: 'list-group-item',
        template: Handlebars.templates.browseContractorListItem,
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});