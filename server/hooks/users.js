Accounts.onCreateUser(function(options, user) {
  // add profile if there
  user.profile = {
    _audits: [],
    fname: 'First Name',
    lname: 'Last Name',
    address: {
      _audits: [],
      street1: '123 Default Street',
      city: 'Default',
      state: 'CA',
      zip: 12345,
      created_by: 'SYSTEM',
      date_created: new Date()
    },
    created_by: 'SYSTEM',
    date_created: new Date()
  };

  // extend our defaults with user supplied
  if (!!options.profile && !_.isEmpty(options.profile))
    user.profile = _.extend(user.profile, options.profile);

  // setup our emails object
  if (!!options.email) {
    user.emails = [{
      _audits: [],
      address: options.email,
      verified: false,
      created_by: options.created_by || 'SYSTEM',
      date_created: new Date()
    }];
  }

  // add other fields to user object
  user = _.extend(user, {
    _audits: [],
    _account: options._account || 'SYSTEM',
    created_by: options.created_by || 'SYSTEM',
    date_created: new Date()
  });

  // remove fields
  user = _.omit(user, ['_id', 'createdAt']);

  // test validate our user object
  //UserSchema.namedContext().validate(user);
  //console.log(UserSchema.namedContext().invalidKeys());
  //console.log(user);

  return user;
});

Accounts.validateLoginAttempt(function(doc) {
  // TODO: Fail login attempt security stuff here.
  return true;
});

Accounts.onLogin(function(doc) {
  // TODO: Keep track of users logged in.
});

Accounts.onLoginFailure(function(doc) {
  // TODO: Add some failed login attempt tracking
});

Meteor.users.before.update(function(userId, doc, fieldNames, modifier, options) {
  // do some actions now like create _audits
});

Meteor.users.before.remove(function(userId, doc) {
  // we want to remove the user from teams and stories
  Teams.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });

  Stories.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });
});