Template.roomCreate.helpers({
    //add you helpers here
});

Template.roomCreate.events({
    'click .create-room': function (e) {
        e.preventDefault();

        var room = document.getElementById('room');
        if (room.value != "") {
            var room = {
                name: room.value
            }
            Meteor.call("insertRoom", room, function (error, room) {
                if (error) {
                    console.log(error.reason);
                }
            });
            document.getElementById('room').value = '';
            room.value = '';

            IonModal.close('roomCreate');
        }
    }
});

Template.roomCreate.onCreated(function () {
    //add your statement here
});

Template.roomCreate.onRendered(function () {
    //add your statement here
});

Template.roomCreate.onDestroyed(function () {
    //add your statement here
});

