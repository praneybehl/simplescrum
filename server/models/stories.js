Stories.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'story-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'story-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'story-delete-allow'))
      return true;

    return false;
  }
});

Stories.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'story-create-deny'))
      return false;

    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'story-update-deny'))
      return false;

    return true;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'story-delete-deny'))
      return false;

    return true;
  }
});