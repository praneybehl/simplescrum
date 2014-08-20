Meteor.roles.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-role-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'user-role-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-role-allow'))
      return true;

    return false;
  }
});

Meteor.roles.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-role-deny'))
      return false;

    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'user-role-deny'))
      return false;

    return true;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-role-deny'))
      return false;

    return true;
  }
});