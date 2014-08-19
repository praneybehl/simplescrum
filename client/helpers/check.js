
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