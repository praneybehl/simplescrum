
Router.configure({
  layoutTemplate: '_layout', // our default layout template
  loadingTemplate: '_loading', // our loading template
  notFoundTemplate: '404', // page not found
  loginRequired: {
    name: 'login',
    shouldRoute: true
  },
  waitOn: function() {
    // this is where i like to load default subscriptions like
    // to a settings collection.
  },
  onBeforeAction: function() {
    // this can be used for loading screens, etc...
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
    loginRequired: {
      name: 'login',
      shouldRoute: true
    },
    controller: 'HomeController'
  });

  // login
  this.route('login', {
    path: '/login',
    controller: 'LoginController'
  });

  // settings
  this.route('settings', {
    path: '/settings',
    controller: 'TestController'
  });

  // users
  this.route('users', {
    path: '/users',
    controller: 'TestController'
  });

  // projects
  this.route('projects', {
    path: '/projects',
    controller: 'TestController'
  });

  // milestones
  this.route('milestones', {
    path: '/milestones',
    controller: 'TestController'
  });

  // stories
  this.route('stories', {
    path: '/stories',
    controller: 'TestController'
  });
});