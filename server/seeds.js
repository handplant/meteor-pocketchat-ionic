Meteor.startup(function () {
    //Rooms.remove({});
    if (Rooms.find().count() === 0) {
        Rooms.insert({
            name: "general",
            createdAt: Date.now(),
            user: 'admin',
            count: 0
        });
        Rooms.insert({
            name: "random",
            createdAt: Date.now(),
            user: 'admin',
            count: 0
        });
        Rooms.insert({
            name: "test",
            createdAt: Date.now(),
            user: 'admin',
            count: 0
        });
    }
});