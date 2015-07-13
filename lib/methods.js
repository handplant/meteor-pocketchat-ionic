Meteor.methods({
    insertMessage: function (message) {

        check(message, {
            roomId: String,
            text: String
        });

        //extend
        message.createdAt = Date.now();

        if (!this.userId) {
            message.user = "Anonymous";
        } else {
            message.user = this.userId;
        }

        //create
        message._id = Messages.insert(message);

        //Inc Message Count in Room
        Rooms.update({_id: message.roomId}, {
            $inc: {'count': 1}
        });

        return message;
    },
    insertRoom: function (room) {

        check(room, {
            name: String
        });

        if (!this.userId) {
            console.log('no way');
            Router.go('/userAccounts');
        }

        //extend
        room.count = 0;
        room.createdAt = Date.now();
        room.user = this.userId;

        //create
        room._id = Rooms.insert(room);

        return room;
    }
});