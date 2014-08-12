LoginController = RouteController.extend({
  redirectOnLogin: true,
  onBeforeAction: function() {
    Session.set('layout', 1);
  },
  onAfterAction: function() {
    // our timeout function
    var _fn = function() {
      if (Meteor.user && Meteor.user())
        Router.go('home');
      else
        Meteor.setTimeout(_fn, 1000);
    };

    // start timeout
    Meteor.setTimeout(_fn, 1000);
  }
});