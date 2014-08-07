LoginController = RouteController.extend({
  template: 'login',
  redirectOnLogin: true,
  onBeforeAction: function() {
    Session.set('layout', 1);
  },
  onAfterAction: function() {
    // if login has been accomplished then go home
    Meteor.setInterval(function() {
      if (Meteor.user && Meteor.user())
        /**
         * TODO: Need to route back to requested route.
         */
        Router.go('home'); // go home
    }, 1000);
  }
});