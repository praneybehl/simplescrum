UserSchema = new SimpleSchema({
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
      return __('user._account');
    }
  },
  _roles: {
    type: [String],
    label: function() {
      return __('user.roles');
    },
    autoValue: function() {
      if (this.isInsert && !this.isSet)
        return [];
    }
  },
  emails: {
    type: [UserEmailSchema],
    label: function() {
      return __('user.emails.name');
    }
  },
  profile: {
    type: UserProfileSchema,
    label: function() {
      return __('user.profile.name');
    }
  },
  services: {
    type: Object,
    label: function() {
      return __('user.services');
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
Meteor.users.attachSchema(UserSchema);