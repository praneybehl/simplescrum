ProjectSchema = new SimpleSchema({
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
      return __('project._account');
    }
  },
  title: {
    type: String,
    label: function() {
      return __('project.title');
    }
  },
  body: {
    type: String,
    label: function() {
      return __('project.body');
    }
  },
  status: {
    type: String,
    label: function() {
      return __('project.status');
    },
    allowedValues: ['Waiting','In-progress','Finished','Support','Closed']
  },
  date_due: {
    type: Date,
    label: function() {
      return __('project.date_due');
    }
  },
  created_by: {
    type: String,
    label: function() {
      return __('created_by');
    },
    autoValue: function() {
      if (this.isUpdate)
        this.unset();

      if (this.isSet)
        return this.value;

      return this.userId;
    },
    denyUpdate: true
  },
  date_created: {
    type: Date,
    label: function() {
      return __('date_created');
    },
    autoValue: function() {
      if (this.isUpdate)
        this.unset();

      return new Date();
    },
    denyUpdate: true
  },
  modified_by: {
    type: String,
    label: function() {
      return __('modified_by');
    },
    autoValue: function() {
      if (this.isUpdate) {
        if (this.isSet)
          return this.value;

        return this.userId;
      }

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

// attach to collection
Projects.attachSchema(ProjectSchema);