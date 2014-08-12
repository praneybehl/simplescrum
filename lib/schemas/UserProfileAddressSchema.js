UserProfileAddressSchema = new SimpleSchema({
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
  street1: {
    type: String,
    label: function() {
      return __('user.profile.address.street1');
    }
  },
  street2: {
    type: String,
    label: function() {
      return __('user.profile.address.street2');
    },
    optional: true
  },
  street3: {
    type: String,
    label: function() {
      return __('user.profile.address.street3');
    },
    optional: true
  },
  city: {
    type: String,
    label: function() {
      return __('user.profile.address.city');
    }
  },
  state: {
    type: String,
    label: function() {
      return __('user.profile.address.state');
    },
    allowedValues: getStateCodes()
  },
  zip: {
    type: Number,
    label: function() {
      return __('user.profile.address.zip');
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