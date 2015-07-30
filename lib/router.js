Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    trackPageView: true
});


Router.route('/', {
    name: 'rooms',
    template: 'rooms',
    waitOn: function () {
        return Meteor.subscribe('rooms');
    },
    data: function () {
        var templateData = { rooms: Rooms.find({}, { sort: {createdAt: -1}}) };
        return templateData;
    }
});

Router.route('userAccounts');