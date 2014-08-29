StoryController = RouteController.extend({
  onBeforeAction: function() {
    Session.set('layout', 2);
  },
  data: function() {
    return {
      // no data to return all run from template
    };
  },
  onAfterAction: function() {
    Meteor.setTimeout(function() {
      // setup multiselect
      $('select[name=teams]').multiselect(Config.get('multiselect'));
      $('select[name=users]').multiselect(Config.get('multiselect'));
    }, 500);
  }
});