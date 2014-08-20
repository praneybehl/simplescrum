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
    Session.set('flagRun', true); // run once hack for switch buttons
    Meteor.setTimeout(function() {
      // setup multiselect
      $('select[name=roles]').multiselect(Config.get('multiselect'));
      $('select[name=users]').multiselect(Config.get('multiselect'));

      // setup our switch objects
      if (Session.get('flagRun')) { // run once hack
        $('input[type=checkbox]').switchButton(Config.get('switchButton'));
        Session.set('flagRun', false);
      }
    }, 500);
  }
});