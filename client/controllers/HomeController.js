HomeController = RouteController.extend({
  onBeforeAction: function() {
    Session.set('layout', 2);
  },
  data: function() {
    return {
      recentUsers: function() {
        return Meteor.users.find({}, {limit: 10, sort: {date_created: 'desc'}}).fetch();
      },
      recentProjects: function() {
        return Projects.find({}, {limit: 10, sort: {date_created: 'desc'}}).fetch();
      },
      recentSprints: function() {
        return Sprints.find({}, {limit: 10, sort: {date_created: 'desc'}}).fetch();
      },
      recentStories: function() {
        return Stories.find({}, {limit: 10, sort: {date_created: 'desc'}}).fetch();
      }
    };
  }
});