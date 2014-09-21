define([
    'backbone',
    'firebase',
    'handlebars',
    'templates'
], function (Backbone, Firebase, Handlebars) {
    'use strict';

    return Backbone.View.extend({
        events: {
            'submit': 'onSubmit'
        },
        template: Handlebars.templates.login,
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        onSubmit: function (e) {
            e.preventDefault();

            var firebase = new Firebase('https://helpdepot.firebaseio.com/contractors');
            var ref = firebase.push({
                name: this.$('input[name="name"]').val(),
                angie: this.$('input[name="angie"]').val(),
                expertise: {
                    plumbing: this.$('input[name="plumbing"]').is(':checked'),
                    electrical: this.$('input[name="electrical"]').is(':checked'),
                    flooring: this.$('input[name="flooring"]').is(':checked'),
                    drywall: this.$('input[name="drywall"]').is(':checked'),
                    roofing: this.$('input[name="roofing"]').is(':checked')
                }
            });
            // ref.onDisconnect().remove();

            Backbone.history.navigate('contractor/' + ref.name(), true);
        }
    });
});