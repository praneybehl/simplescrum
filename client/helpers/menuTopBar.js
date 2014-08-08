Template.menuTopBar.rendered = function () {
  /**
   * TODO: Need to expand search to include projects, stories, sprints.
   */
  // build our items
  var _items = [];
  _items = _.union(_items, Meteor.users.find({}).fetch());
  //_items = _.union(_items, Projects.find({}).fetch());
  //_items = _.union(_items, Sprints.find({}).fetch());
  //_items = _.union(_items, Stories.find({}).fetch());
  _items = _.map(_items, function(item) {
    return _.extend(item, {value: (item.title || getName(item._id))});
  });

  // our map
  _map = {};
  _.each(_items, function(item) {
    _map[item.value] = item;
  });

  /**
   * This will run after 1 second.  Will bing typeahead.
   * @return {void} Nothing.
   */
  Meteor.setTimeout(function() {
    this.$('.input-search').typeahead({
      showHintOnFocus: true, // show hint
      items: 10, // how many to return
      minLenth: 0, // chars before search start

      source: function(query, process) {
        process(_.map(_items, function(item) {
          return item.value;
        }));
      },

      updater: function(item) {
        // clear our search box
        $('.input-search').val('');

        // route to view user
        Router.go('usersView', {_id: _map[item]._id});
      },

      matcher: function(item) {
        var _q = this.query.trim().toLowerCase(),
            _v = item.toLowerCase();

        if (_.indexOf(_v, _q) !== -1)
          return true;
      },

      sorter: function(items) {
        return _.sortBy(items, function(item) {
          return item.value;
        });
      }
    });
  }, 1000);
};

Template.menuTopBar.helpers({

});
