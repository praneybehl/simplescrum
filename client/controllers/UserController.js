UserController = RouteController.extend({
  yieldTemplates: {
    'userList': {to: 'col2'}
  },
  onBeforeAction: function() {
    Session.set('layout', 3);
  },
  data: function() {
    return {
      users: function() {
        return Meteor.users.find();
      },
      teams: function() {
        return Teams.find();
      },
      user: function() {
        return Meteor.users.findOne({_id: Router.current().params._id});
      },
      team: function() {
        return Teams.findOne({_id: Router.current().params._id});
      }
    };
  },
  onAfterAction: function() {
    // setup multiselect
    $('select[name=roles]').multiselect('rebuild');
    $('select[name=users]').multiselect('rebuild');
  }
});