Teams.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'team-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'team-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'team-delete-allow'))
      return true;

    return false;
  }
});

Teams.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'team-create-deny'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'team-update-deny'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'team-delete-deny'))
      return true;

    return false;
  }
});