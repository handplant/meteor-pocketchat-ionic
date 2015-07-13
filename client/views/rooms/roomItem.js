Template.roomItem.helpers({
});

Template.roomItem.events({
    'click': function(e) {
        e.preventDefault();
        //Router.go('room', {_id: this._id});
        Session.set('currentRoom', this._id);
        IonModal.open('room');
    }
});

Template.roomItem.onCreated(function () {
    //add your statement here
});

Template.roomItem.onRendered(function () {
    //add your statement here
});

Template.roomItem.onDestroyed(function () {
    //add your statement here
});

