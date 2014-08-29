Settings.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'setting-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    // the user is editing profile so allow
    if (userId && userId === doc._id)
      return true;

    if (userId && Roles.userIsInRole(userId, 'setting-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'setting-delete-allow'))
      return true;

    return false;
  }
});

Settings.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'setting-create-deny'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'setting-update-deny'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'setting-delete-deny'))
      return true;

    return false;
  }
});