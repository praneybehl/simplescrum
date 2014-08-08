ProfileController = RouteController.extend({
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