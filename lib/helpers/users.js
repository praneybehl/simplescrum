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
UI.registerHelper('getUserAccountID', function(userId) {
  return new Spacebars.SafeString(getUserAccountID(userId));
});