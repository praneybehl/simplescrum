Template.storyView.rendered = function() {
  Session.set('current_project', null);
  Session.set('story_type', 'insert');
  Session.set('story_id', null);
  Session.set('story_summary', true);

  self.$('.multiselect-container').width('100%');
};

Template.storyView.helpers({
  type: function() {
    return Session.get('story_type');
  },
  doc: function() {
    var _id = Session.get('story_id');
    return Stories.findOne({_id: _id});
  },
  projects: function() {
    var _items = [{label: '', value: ''}];

    _.each(Projects.find().fetch(), function(i) {
      _items.push({label: i.title, value: i._id});
    });

    return _items;
  },
  stories: function() {
    var _p = Session.get('current_project');
    return Stories.find({_project: _p}).fetch();
  },
  types: function() {
    return _.map(['Feature','Requirement','Bug','Removal','Design'], function(i) {
      return {label: i, value: i};
    });
  },
  statuses: function() {
    return _.map(['Waiting','In-progress','Finished'], function(i) {
      return {label: i, value: i};
    });
  },
  priorities: function() {
    return _.map(['High','Normal','Low'], function(i) {
      return {label: i, value: i};
    });
  },
  teams: function() {
    return _.map(Teams.find().fetch(), function(i) {
      return {label: i.title, value: i._id};
    });
  },
  users: function() {
    return _.map(Meteor.users.find().fetch(), function(i) {
      return {label: getName(i._id), value: i._id};
    });
  },
  summary: function() {
    return Session.get('story_summary');
  }
});

Template.storyView.events({
  'click .storyDetail': function(e) {
    kill(e);
    Session.set('story_summary', false);
  },
  'click .storySummary': function(e) {
    kill(e);
    Session.set('story_summary', true);
  },
  'change #_project': function(e) {
    Session.set('current_project', $('#_project').val());
  }
});