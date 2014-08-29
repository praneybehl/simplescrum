SettingController = RouteController.extend({
  waitOn: function() {
    // Nothing right now
  },
  onBeforeAction: function() {
    Session.set('layout', 2);
  }
});