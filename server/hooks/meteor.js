/**
 * This file contains hooks that are related to meteor.
 */

/**
 * This function will handle the modification of new
 * user accounts.
 * @param  {object} options User values from user.
 * @param  {object} user    The user object to insert to db.
 * @return {object}         The user object to insert to db.
 */
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

/**
 * This function is ran every time a login attempt is attempted.
 * @param  {object} attempt The login attempt object.
 * @return {boolean}         True to continue login.
 */
Accounts.validateLoginAttempt(function(attempt) {
  // TODO: Fail login attempt security stuff here.
  return true;
});

/**
 * This function is ran after a success login attempt.
 * @param  {object} attempt The login attempt object.
 * @return {void}         Nothing.
 */
Accounts.onLogin(function(attempt) {
  // TODO: Keep track of users logged in.
});

/**
 * This function is ran after a fail login attempt.
 * @param  {object} attempt The login attempt object.
 * @return {void}         Nothing.
 */
Accounts.onLoginFailure(function(attempt) {
  // TODO: Add some failed login attempt tracking
});
