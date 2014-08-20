Template.userRole.rendered = function() {
  var self = this;
};

Template.userRole.helpers({
  /**
   * Get all of the roles for the selected user.
   * @return {[object]} An array of role objects with name.
   */
  roles: function() {
    // sort by name
    return _.sortBy(Meteor.roles.find().fetch(), function(role) {
      return role.name;
    });
  },
  /**
   * Will return true if current user is in the role and false if not.
   * @return {Boolean} True if in role, false if not.
   */
  isChecked: function() {
    return Roles.userIsInRole(Router.current().params._id, this.name);
  },
  /**
   * Will split the name by hyphen (-), uppercase the first letter,
   * and return with spaces where hyphens where.
   * @param  {string} name The role name.
   * @return {string}      The newly formatted role name.
   */
  roleName: function(name) {
    name = name.split('-');
    if (_.isArray(name) && !_.isEmpty(name)) {
      // uppercase first letter
      name = _.map(name, function(n) {
        return ucfirst(n);
      });
    }
    return name.join(' ');
  }
});

Template.userRole.events({
  /**
   * Will save the roles by sending to the server with user _id and new
   * roles string array.
   * @param  {object} e The click event object.
   * @return {void}   Will display a message based on result from server.
   */
  'click .btnSaveRoles': function(e) {
    kill(e);

    var _roles = [];  // will hold our new roles list

    // loop over roles checkboxes and get checked ones
    $('.role-checkbox').each(function() {
      if ($(this).is(':checked'))
        _roles.push($(this).val());
    });

    // update our user roles
    Meteor.call('addUserToRole', Router.current().params._id, _roles, function(error, result) {
      if (error)
        Alert.e(error);
      else
        Alert.s(__('message.success'), __('message.title.success'), 'OK');
    });
  }
});