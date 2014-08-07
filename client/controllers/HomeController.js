HomeController = RouteController.extend({
  template: 'home',
  onBeforeAction: function() {
    Session.set('layout', 2);
  }
});