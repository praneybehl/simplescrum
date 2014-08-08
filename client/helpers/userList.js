Template.userList.helpers({
  getRoles: function(roles) {
    return roles.join(', ');
  },
  getRolesCount: function(roles) {
    return roles.length || 0;
  }
});