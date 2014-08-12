AccountSchema = new SimpleSchema({
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
  title: {
    type: String,
    label: function() {
      return __('account.title');
    }
  },
  body: {
    type: String,
    label: function() {
      return __('account.body');
    }
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
_Accounts.attachSchema(AccountSchema);