ProfileController = RouteController.extend({
  template: 'profile',
  onBeforeAction: function() {
    Session.set('layout', 2);
  },
  data: function() {
    return {
      item: function() {
        return Meteor.user();
      }
    };
  }
});