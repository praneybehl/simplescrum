Sprints.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'sprint-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'sprint-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'sprint-delete-allow'))
      return true;

    return false;
  }
});

Sprints.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'sprint-create-deny'))
      return false;

    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'sprint-update-deny'))
      return false;

    return true;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'sprint-delete-deny'))
      return false;

    return true;
  }
});