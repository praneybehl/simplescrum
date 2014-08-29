/**
 * The global router configuration object for iron-router.
 */
Router.configure({
  layoutTemplate: '_layout', // our default layout template
  loadingTemplate: '_loading', // our loading template
  notFoundTemplate: '_404', // page not found
  /*loginRequired: {
    name: 'login',
    shouldRoute: true
  },*/
  waitOn: function() {
    // this is where i like to load default subscriptions like
    // to a settings collection.
    return [
      Meteor.subscribe('allUsers'),
      Meteor.subscribe('teams'),
      Meteor.subscribe('projects'),
      Meteor.subscribe('sprints'),
      Meteor.subscribe('stories'),
      Meteor.subscribe('settings')
    ];
  },
  onBeforeAction: function() {
    Check(); // check for roles permission based on route
    Current.setup(); // setup our currently accessed information
  },
  onAfterAction: function() {
    // this can be used for loading screens, etc...

    // this will handle the resizing and alignment of our screen.
    Meteor.setTimeout(function() {
      $(window).trigger('resize');
    }, 500);
  }
});

/**
 * This function will setup the routes for the application
 * and will handle basic authentication on the client side.
 */
Router.map(function() {
  // home, default route
  this.route('home', {
    path: '/',
    template: 'home',
    loginRequired: {
      name: 'login',
      shouldRoute: true
    },
    controller: 'HomeController'
  });

  // login
  this.route('login', {
    path: '/login',
    template: 'login',
    controller: 'LoginController'
  });

  // denied
  // this route is for access denied
  this.route('denied', {
    path: '/denied',
    template: '_403'
  });

  // profile
  this.route('profile', {
    path: '/profile',
    template: 'profile',
    controller: 'ProfileController'
  });

  // settings
  this.route('settings', {
    path: '/settings',
    template: 'settingView',
    controller: 'SettingController'
  });

  // users
  this.route('users', {
    path: '/users',
    template: '_blank',
    controller: 'UserController'
  });
  this.route('user-create', {
    path: '/users/new',
    template: 'userNew',
    controller: 'UserController'
  });
  this.route('user-update', {
    path: '/users/view/:_id',
    template: 'userView',
    controller: 'UserController'
  });
  this.route('user-role', {
    path: '/users/role/:_id',
    template: 'userRole',
    controller: 'UserController'
  });

  // teams
  this.route('team-create', {
    path: '/teams/new',
    template: 'teamNew',
    controller: 'UserController'
  });
  this.route('team-update', {
    path: '/teams/view/:_id',
    template: 'teamView',
    controller: 'UserController'
  });

  // projects
  this.route('projects', {
    path: '/projects',
    template: '_blank',
    controller: 'ProjectController'
  });
  this.route('project-create', {
    path: '/projects/new',
    template: 'projectNew',
    controller: 'ProjectController'
  });
  this.route('project-update', {
    path: '/projects/view/:_project',
    template: 'projectView',
    controller: 'ProjectController'
  });

  // sprints
  this.route('sprints', {
    path: '/sprints',
    template: '_blank',
    controller: 'ProjectController'
  });
  this.route('sprint-create', {
    path: '/sprints/new/:_project',
    template: 'sprintNew',
    controller: 'ProjectController'
  });
  this.route('sprint-update', {
    path: '/sprints/view/:_project/:_sprint',
    template: 'sprintView',
    controller: 'ProjectController'
  });

  // stories
  this.route('stories', {
    path: '/stories',
    template: 'testMain',
    controller: 'TestController'
  });
});