Template.teamNew.helpers({
  users: function() {
    return _.map(Meteor.users.find().fetch(), function(user) {
      return {label: getName(user._id), value: user._id};
    });
  },
  roles: function() {
    return _.map(Meteor.roles.find().fetch(), function(role) {
      return {label: role, value: role};
    });
  }
});