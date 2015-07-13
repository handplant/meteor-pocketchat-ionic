Template.layout.events({
    'click .add-room': function (e, tpl) {
        e.preventDefault();

        if (!Meteor.userId()) {
            console.log('no way');
            Router.go('/userAccounts');
            return false;
        }

        IonModal.open('roomCreate');
    }
});