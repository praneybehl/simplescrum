Meteor.methods({
  /**
   * Will add the roles to the specified user _id.
   * @param {string} userId The user _id.
   * @param {[string]} roles  Array of role strings.
   */
  addUserToRole: function(userId, roles) {
    check(userId, String);
    check(roles, [String]);

    try {
      /**
       * The following built-in function with the meteor-roles packages
       * does not remove roles but only adds.
       */
      //Roles.addUsersToRoles(userId, roles); // deprecated does not remove
      Meteor.users.update({_id: userId}, {$set: {roles: roles}}, function(error) {
        if (error)
          throw error;
        else
          return true;
      });
    } catch (error) {
      throw new Meteor.Error(500, error.message);
    }
  }
});