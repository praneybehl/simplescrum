Meteor.users.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'user-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-delete-allow'))
      return true;

    return false;
  }
});

Meteor.users.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-create-deny'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'user-update-deny'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'user-delete-deny'))
      return true;

    return false;
  }
});