define([
    'backbone',
    'views/browseContractorListItem'
], function (Backbone, BrowseContractorListItemView) {
    'use strict';

    return Backbone.View.extend({
        tagName: 'ul',
        className: 'list-group',
        initialize: function () {
            this.listenTo(this.collection, 'add', this.onAdd);
            this.collection.each(this.onAdd, this);
        },
        onAdd: function (model) {
            var view = new BrowseContractorListItemView({
                model: model
            });
            this.$el.append(view.render().el);
        }
    });
});