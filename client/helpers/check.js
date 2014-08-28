/**
 * This if a global function that will redirect to denied route
 * if the requesting user is not in that role.  Deny roles take
 * priority over allow roles.
 * TODO: Add team checking.
 * @todo Add team checking.
 */
Check = function() {
  var _route = Router.current().route.name, // our current route name
      _userId = Meteor.userId(), // the current user _id
      _allow = true; // will return on false

  // check route name against roles
  // but not unless with a '-', ignore those without
  if (_route.indexOf('-') !== -1) {
    // if allowed then accept true response
    _allow = Roles.userIsInRole(_userId, (_route+'-allow'));
    // if in deny role then set to false/opposite response
    // deny takes priority over allow
    _allow = !Roles.userIsInRole(_userId, (_route+'-deny'));
  }

  // redirect if false
  if (!_allow)
    Router.go('denied');
};

/**
 * Every second we want to check if the user is logged in or not.
 */
Meteor.setInterval(function() {
  if (Router.current().route.name !== 'login' && !Meteor.user())
    Router.go('login');
}, 5000);