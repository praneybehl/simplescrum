HomeController = RouteController.extend({
  onBeforeAction: function() {
    Session.set('layout', 2);
  }
});