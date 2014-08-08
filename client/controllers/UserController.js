UserController = RouteController.extend({
  yieldTemplates: {
    'userList': {to: 'col2'}
  },
  onBeforeAction: function() {
    Session.set('layout', 3);
  },
  data: function() {
    return {
      item: function() {
        var _id = Router.current().params._id;

        if (_id)
          return Meteor.users.findOne({_id: _id});
        else
          return Meteor.user();
      },
      items: function() {
        return Meteor.users.find();
      }
    };
  }
});