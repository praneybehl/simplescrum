Template.teamView.rendered = function() {
  // setup multiselect options
  var _options = {
    maxHeight: 300, // no more than 400px in height, scrollbar
    includeSelectAllOption: true // will include select all checkbox
  };

  Meteor.setTimeout(function() {
    // setup multiselect
    this.$('select[name=roles]').multiselect(_options);
    this.$('select[name=users]').multiselect(_options);

    // simple correction for multiselect
    this.$('button.multiselect')
      .css({width: '100%'})
      .parent()
      .css({width: '100%'});
    this.$('ul.multiselect-container').css({width: '100%'});
  }, 500);
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