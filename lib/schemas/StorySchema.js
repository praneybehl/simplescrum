StorySchema = new SimpleSchema({
  _audits: {
    type: [AuditSchema],
    label: function() {
      return __('audits');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  _account: {
    type: String,
    label: function() {
      return __('story._account');
    }
  },
  _project: {
    type: String,
    label: function() {
      return __('story._project');
    }
  },
  title: {
    type: String,
    label: function() {
      return __('story.title');
    }
  },
  body: {
    type: String,
    label: function() {
      return __('story.body');
    }
  },
  priority: {
    type: String,
    label: function() {
      return __('story.priority');
    },
    allowedValues: ['High','Normal','Low']
  },
  points: {
    type: Number,
    label: function() {
      return __('story.points');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return 0;
    }
  },
  hours: {
    type: Number,
    label: function() {
      return __('story.hours');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return 0;
    }
  },
  teams: {
    type: [String],
    label: function() {
      return __('story.teams');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  users: {
    type: [String],
    label: function() {
      return __('story.users');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  status: {
    type: String,
    label: function() {
      return __('story.status');
    },
    allowedValues: ['Waiting','In-progress','Finished']
  },
  type: {
    type: String,
    label: function() {
      return __('story.type');
    },
    allowedValues: ['Feature','Requirement','Bug','Removal','Design']
  },
  date_start: {
    type: Date,
    label: function() {
      return __('story.date_start');
    },
    optional: true
  },
  date_end: {
    type: Date,
    label: function() {
      return __('story.date_end');
    },
    optional: true
  },
  created_by: {
    type: String,
    label: function() {
      return __('created_by');
    },
    autoValue: function() {
      return createdBy.call(this);
    },
    denyUpdate: true
  },
  date_created: {
    type: Date,
    label: function() {
      return __('date_created');
    },
    autoValue: function() {
      return dateCreated.call(this);
    },
    denyUpdate: true
  },
  modified_by: {
    type: String,
    label: function() {
      return __('modified_by');
    },
    autoValue: function() {
      return modifiedBy.call(this);
    },
    denyInsert: true,
    optional: true
  },
  date_modified: {
    type: Date,
    label: function() {
      return __('date_modified');
    },
    autoValue: function() {
      return dateModified.call(this);
    },
    denyInsert: true,
    optional: true
  }
});

// attach to collection
Stories.attachSchema(StorySchema);