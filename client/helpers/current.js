/**
 * A shortcut object to some of the variables we
 * will use a lot like Router.current().params._id
 * @type {Object}
 */
Current = {
  setup: function() {
    var _route = Router.current().route.name,
        _id = Current.id();

    // setup our history of accessed items
    switch (_route) {
      case 'project-update':
        Session.set('_project', _id);
        break;
      case 'sprint-update':
        Session.set('_sprint', _id);
        break;
      case 'story-update':
        Session.set('_story', _id);
        break;
    }

    // setup our account, should be same as user
    if (Meteor.user && Meteor.user() && Meteor.user()._account)
      Session.set('_account', Meteor.user()._account);
  },
  /**
   * The current router param id.
   * @return {string} The param id.
   */
  id: function() {
    return Router.current().params._id;
  },
  /**
   * The current account active.
   * @return {string} The _Accounts _id.
   */
  account: function() {
    return Session.get('_account');
  },
  /**
   * The current project id.
   * @return {string} The Projects _id.
   */
  project: function() {
    return Router.current().params._project || Session.get('_project');
  },
  /**
   * The current sprint id.
   * @return {string} The Sprints _id.
   */
  sprint: function() {
    return Router.current().params._sprint || Session.get('_sprint');
  },
  /**
   * The current story id.
   * @return {string} The Stories _id.
   */
  story: function() {
    return Router.current().params._story || Session.get('_story');
  }
};