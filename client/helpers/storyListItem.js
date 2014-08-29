Template.storyListItem.helpers({
  summary: function() {
    return Session.get('story_summary');
  }
});

Template.storyListItem.events({
  'click .storyEdit': function(e) {
    kill(e);

    Session.set('story_type', 'update');
    Session.set('story_id', this._id);

    Meteor.setTimeout(function() {
      $('#teams').multiselect('rebuild');
      $('#users').multiselect('rebuild');
    }, 500);
  }
});