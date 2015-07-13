Template.registerHelper("timeAgo", function (timestamp) {
    return moment(timestamp).fromNow();
});

Template.registerHelper("getUsername", function (userId) {

    if (userId === "admin")
        return "Admin";

    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === "undefined") {
        return "Anonymous";
    }

    return user.username;
});