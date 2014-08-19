Projects.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'project-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'project-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'project-delete-allow'))
      return true;

    return false;
  }
});

Projects.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'project-create-deny'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'project-update-deny'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'project-delete-deny'))
      return true;

    return false;
  }
});