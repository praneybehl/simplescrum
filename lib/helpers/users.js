/**
 * This function will return the supplied user's
 * _id with their _account _id.
 * @param  {string} userId The user ID.
 * @return {string}        The account ID or the user ID.
 */
getUserAccountID = function(userId) {
  check(userId, String);

  var _user = Meteor.users.findOne({_id: userId});
  if (!_.isEmpty(_user))
    return _user._account;

  return userId;
};
/**
 * Register the getUserAccountID function with templates.
 * This function will return the supplied user's
 * _id with their _account _id.
 * @param  {string} userId The user ID.
 * @return {string}        The account ID or the user ID.
 */
UI.registerHelper('getUserAccountID', function(userId) {
  return new Spacebars.SafeString(getUserAccountID(userId));
});

/**
 * This function will return the user name for the given _id.
 * @param  {string} userId The user ID.
 * @return {string}        The user name as: last, first ?middle
 */
getName = function(userId) {
  if (!userId) return userId;

  check(userId, String);

  var _user = Meteor.users.findOne({_id: userId});
  if (!_.isEmpty(_user))
    return _user.profile.lname+', '+_user.profile.fname+' '+(_user.profile.mname || '');

  return userId;
};

/**
 * Register the getName function with templates.
 * This function will return the user name for the given _id.
 * @param  {string} userId The user ID.
 * @return {string}        The user name as: last, first ?middle
 */
UI.registerHelper('getName', function(userId) {
  return getName(userId);
});

/**
 * This function will return the user's email address.
 * @param  {string} userId The userId to search for.
 * @return {string}        The user's email address.
 */
getEmail = function(userId) {
  if (!userId) return userId;

  check(userId, String);

  var _user = Meteor.users.findOne({_id: userId});
  if (!_.isEmpty(_user))
    return _user.emails[0].address;

  return userId;
};

/**
 * Registers getEmail with the templates.
 * This function will return the user's email address.
 * @param  {string} userId The userId to search for.
 * @return {string}        The user's email address.
 */
UI.registerHelper('getEmail', function(userId) {
  return getEmail(userId);
});