
Template.projectView.events({
  'click .btn-delete': function(e) {
    kill(e);

    Delete(function(no) {
      if (!no) {
        Projects.remove({_id: Router.current().params._id}, function(error) {
          if (error)
            Alert.e(error);
          else
            Router.go('projects');
        });
      }
    });
  }
});