Accounts.onCreateUser(function(options, user) {
    //extract username from email
    user.username = user.emails[0].address.match(/^([^@]*)@/)[1];
    return user;
});
