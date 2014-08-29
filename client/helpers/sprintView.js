
Template.sprintView.events({
  'click .btn-delete': function(e) {
    kill(e);

    Delete(function(no) {
      if (!no) {
        Sprints.remove({_id: Router.current().params._sprint}, function(error) {
          if (error)
            Alert.e(error);
          else
            Router.go('project-update', {_project: Router.current().params._project});
        });
      }
    });
  }
});