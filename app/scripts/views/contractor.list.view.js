define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars) {
    'use strict';

    var View = Backbone.View.extend({
        render: function () {
            this.$el.empty();
            this.$el.html(Handlebars.templates.contractor_list_view(this.collection.toJSON()));
            return this;
        }
    });
    return View;
});