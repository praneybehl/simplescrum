AuditSchema = new SimpleSchema({
  field: {
    type: String,
    label: function() {
      return __('audit.field');
    },
    denyUpdate: true
  },
  old: {
    type: String,
    label: function() {
      return __('audit.old');
    },
    denyUpdate: true
  },
  'new': {
    type: String,
    label: function() {
      return __('audit.new');
    },
    denyUpdate: true
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
  }
});