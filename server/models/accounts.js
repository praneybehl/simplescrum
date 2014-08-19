_Accounts.allow({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'account-create-allow'))
      return true;

    return false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'account-update-allow'))
      return true;

    return false;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'account-delete-allow'))
      return true;

    return false;
  }
});

_Accounts.deny({
  insert: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'account-create-deny'))
      return false;

    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    if (userId && Roles.userIsInRole(userId, 'account-update-deny'))
      return false;

    return true;
  },
  remove: function(userId, doc) {
    if (userId && Roles.userIsInRole(userId, 'account-delete-deny'))
      return false;

    return true;
  }
});