var messagesSubs = new SubsManager({
    cacheLimit: 20,
    expireIn: 10
});


Template.room.helpers({
    name: function () {
        return Template.instance().room().name;
    },
    messages: function() {
        return Template.instance().messages();
    }
});

Template.room.events({
    'keydown input': function (e) {
        if (e.which == 13) {
            var text = document.getElementById('message');
            if (text.value != "") {
                var message = {
                    text: text.value,
                    roomId: Session.get('currentRoom')
                }
                Meteor.call("insertMessage", message, function (error, message) {
                    if (error) {
                        console.log(error.reason);
                    }
                });
                document.getElementById('message').value = '';
                text.value = '';
            }
        }
    }
});

Template.room.onCreated(function () {
    var self = this;

    self.sort = new ReactiveVar({createdAt: 1});
    self.limit = new ReactiveVar(500);

    self.autorun(function() {
        Meteor.subscribe("currentRoom", Session.get('currentRoom'));
        Meteor.subscribe("messages", Session.get('currentRoom'), self.sort.get(), self.limit.get());
    });

    self.room = function () {
        return Rooms.findOne({_id: Session.get('currentRoom')});
    }

    self.messages = function() {
        return Messages.find({roomId: Session.get('currentRoom')}, { sort: self.sort.get(), limit: self.limit.get() });
    }
});

Template.room.onRendered(function () {
    this.find('.scroll-bottom-wrapper')._uihooks = {
        insertElement: function (node, next) {
            $(node).insertBefore(next);
            var scrollDiv = $('div.scroll-bottom-wrapper')[0];
            $('div.scroll-bottom-wrapper').scrollTop($('div.scroll-bottom-wrapper')[0].scrollHeight);
        }
    }
});

Template.room.onDestroyed(function () {
    //add your statement here
});



