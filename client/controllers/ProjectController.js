ProjectController = RouteController.extend({
  yieldTemplates: {
    'projectList': {to: 'col2'},
    'sprintList': {to: 'col3'}
  },
  onBeforeAction: function() {
    if (!!Current.project())
      Session.set('layout', 4);
    else
      Session.set('layout', 3);
  },
  data: function() {
    return {
      // related to project
      project: function() {
        return Projects.findOne({_id: Router.current().params._project});
      },
      sprints: function() {
        return Sprints.find({_project: Router.current().params._project});
      },
      stories: function() {
        return Stories.find({_project: Router.current().params._project});
      },
      // universal
      projects: function() {
        return Projects.find();
      },
      sprint: function() {
        return Sprints.findOne({_id: Router.current().params._sprint});
      },
      story: function() {
        return Stories.findOne({_id: Router.current().params._story});
      }
    };
  }
});