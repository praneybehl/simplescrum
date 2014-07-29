HomeController = RouteController.extend({
  onBeforeAction: function() {
    Session.set('layout', 4);
  }
});