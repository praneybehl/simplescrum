Template.userList.rendered = function() {
  // if team is the path then show
  if (Router.current().path.indexOf('teams') !== -1) {
    // show teams
    self.$('.nav-tabs li a[href="#teams"]').tab('show');
  } else {
    // default to users
    self.$('.nav-tabs li a[href="#users"]').tab('show');
  }
};

Template.userList.helpers({
  getRoles: function(roles) {
    return roles.join(', ');
  },
  getRolesCount: function(roles) {
    return roles.length || 0;
  }
});