Meteor.publish('rooms', function () {
    return Rooms.find();
});

Meteor.publish('currentRoom', function(id) {
    check(id, String);
    return id && Rooms.find(id);
});

Meteor.publish('messages', function(roomId, sort, limit) {
    check(roomId, String);
    check(sort, Object);
    check(limit, Number);
    return Messages.find({roomId: roomId}, {sort: sort, limit: limit});
});

Meteor.publish("usernames", function () {
    return Meteor.users.find({}, {fields: {
        "username": 1
    }});
});