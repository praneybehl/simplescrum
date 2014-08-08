Meteor.methods({
  createRoles: function() {
    var _roles = Assets.getText('roles.txt', function(error, result) {
      if (error) {
        Alert.e(error);
      } else {
        // we got the roles now clean database and continue
        Roles.remove({});

        // add new ones
        _roles = _roles.split(', ');

        // loop over and add to db
        _.each(_roles, function(role) {
          Roles.createRole(role);
        });
      }
    });
  }
});