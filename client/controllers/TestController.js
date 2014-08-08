TestController = RouteController.extend({
  yieldTemplates: {
    'testSub': {to: 'col2'},
    'testSubSub': {to: 'col3'}
  },
  waitOn: function() {
    // nothing its a test controller
  },
  onBeforeAction: function() {
    Session.set('layout', 4);
  }
});