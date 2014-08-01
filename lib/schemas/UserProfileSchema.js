UserProfileSchema = new SimpleSchema({
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
  fname: {
    type: String,
    label: function() {
      return __('user.profile.fname');
    }
  },
  mname: {
    type: String,
    label: function() {
      return __('user.profile.mname');
    },
    optional: true
  },
  lname: {
    type: String,
    label: function() {
      return __('user.profile.lname');
    }
  },
  phone: {
    type: String,
    label: function() {
      return __('user.profile.phone');
    },
    optional: true
  },
  address: {
    type: UserProfileAddressSchema,
    label: function() {
      return __('user.profile.address.name');
    },
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