SprintSchema = new SimpleSchema({
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
  status: {
    type: String,
    label: function() {
      return __('sprint.status');
    },
    blackbox: true,
    optional: true
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