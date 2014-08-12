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
  }
});