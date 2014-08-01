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
      return __('sprint._account');
    }
  },
  _project: {
    type: String,
    label: function() {
      return __('sprint._project');
    }
  },
  _sprint: {
    type: String,
    label: function() {
      return __('sprint._sprint');
    }
  },
  title: {
    type: String,
    label: function() {
      return __('sprint.title');
    }
  },
  body: {
    type: String,
    label: function() {
      return __('sprint.body');
    }
  },
  priority: {
    type: String,
    label: function() {
      return __('sprint.priority');
    },
    allowedValues: ['High','Normal','Low']
  },
  points: {
    type: Number,
    label: function() {
      return __('sprint.points');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return 0;
    }
  },
  hours: {
    type: Number,
    label: function() {
      return __('sprint.hours');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return 0;
    }
  },
  teams: {
    type: String,
    label: function() {
      return __('sprint.teams');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  users: {
    type: String,
    label: function() {
      return __('sprint.users');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  status: {
    type: String,
    label: function() {
      return __('sprint.status');
    },
    allowedValues: ['Waiting','In-progress','Finished']
  },
  type: {
    type: String,
    label: function() {
      return __('sprint.type');
    },
    allowedValues: ['Feature','Requirement','Bug','Removal','Design']
  },
  date_start: {
    type: Date,
    label: function() {
      return __('sprint.date_start');
    },
    blackbox: true,
    optional: true
  },
  date_end: {
    type: Date,
    label: function() {
      return __('sprint.date_end');
    },
    blackbox: true,
    optional: true
  },
  created_by: {
    type: String,
    label: function() {
      return __('created_by');
    },
    autoValue: function() {
      if (this.isInsert)
        return this.userId;

      this.unset();
    },
    denyUpdate: true
  },
  date_created: {
    type: Date,
    label: function() {
      return __('date_created');
    },
    autoValue: function() {
      if (this.isInsert)
        return new Date();

      this.unset();
    },
    denyUpdate: true
  },
  modified_by: {
    type: String,
    label: function() {
      return __('modified_by');
    },
    autoValue: function() {
      if (this.isUpdate)
        return this.userId;

      this.unset();
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
      if (this.isUpdate)
        return new Date();

      this.unset();
    },
    denyInsert: true,
    optional: true
  }
});