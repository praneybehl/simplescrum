Template.teamView.rendered = function() {
  var self = this;

  Meteor.setTimeout(function() {
    // resize multiselect dropdowns
    self.$('.multiselect-container').width('100%');
  }, 1000);
};

Template.teamView.helpers({
  users: function() {
    return _.map(Meteor.users.find().fetch(), function(user) {
      return {label: getName(user._id), value: user._id};
    });
  },
  roles: function() {
    return _.map(Meteor.roles.find().fetch(), function(role) {
      return {label: role.name, value: role._id};
    });
  }
});

Template.teamView.events({
  'click .btn-delete': function(e) {
    kill(e);

    Delete(function(no) {
      if (!no) {
        Teams.remove({_id: Router.current().params._id}, function(error) {
          if (error)
            Alert.e(error);
          else
            Router.go('users');
        });
      }
    });
  }
});