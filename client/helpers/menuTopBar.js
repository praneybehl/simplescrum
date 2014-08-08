Template.menuTopBar.rendered = function () {
  Meteor.setTimeout(function() {
    this.$('.input-search').typeahead({
      items: 10, // how many to return
      minLenth: 1, // chars before search start
      source: function() {
        var _items = [];

        _items = _.union(_items, Meteor.users.find({}).fetch());
        _items = _.union(_items, Projects.find({}).fetch());
        _items = _.union(_items, Sprints.find({}).fetch());
        _items = _.union(_items, Stories.find({}).fetch());

        _items = _.map(_items, function(item) {
          return item.title || getName(item._id);
        });

        return _items;
      },
      updater: function(item) {
        // when a user selects an item
        return item;
      }
    });
  }, 1000);
};

Template.menuTopBar.helpers({

});
