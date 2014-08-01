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
    }
  },
  street3: {
    type: String,
    label: function() {
      return __('user.profile.address.street3');
    }
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
    }
  },
  zip: {
    type: Number,
    label: function() {
      return __('user.profile.address.body');
    }
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