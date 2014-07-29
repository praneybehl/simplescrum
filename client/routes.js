
Router.configure({
  layoutTemplate: '_layout', // our default layout template
  notFoundTemplate: '404', // page not found
  waitOn: function() {
    // this is where i like to load default subscriptions like
    // to a settings collection.
  },
  onBeforeAction: function() {
    // this can be used for loading screens, etc...

    // this will handle the resizing and alignment of our screen.
    $(window).trigger('resize');
  },
  onAfterAction: function() {
    // this can be used for loading screens, etc...
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
    controller: 'HomeController'
  });
});