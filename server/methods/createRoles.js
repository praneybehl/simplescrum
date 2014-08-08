Meteor.methods({
  createRoles: function() {
    // get /private/roles.txt from server
    Assets.getText('roles.txt', function(error, result) {
      if (error) {
        console.log(error);
      } else {
        // loop over and add/delete to db
        _.each(result.split(','), function(role) {
          Roles.createRole(role.trim());
        });
      }
    });
  }
});