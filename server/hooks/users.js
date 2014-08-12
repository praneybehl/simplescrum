/**
 * This hook will run before every update.
 * @param  {string} userId     The user _id.
 * @param  {object} doc        The document to be modified.
 * @param  {object} fieldNames An array of changed fields.
 * @param  {object} modifier   The modifications to be applied.
 * @param  {object} options    Options for hook.
 * @return {object}            The modified object to go to db.
 */
Meteor.users.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier = getAudits(userId, doc, fieldNames, modifier); // setup audits
});

/**
 * This function will run before an object can be removed.
 * @param  {string} userId     The user _id.
 * @param  {object} doc        The document to be modified.
 * @return {void}        Nothing.
 */
Meteor.users.before.remove(function(userId, doc) {
  // we want to remove the user from teams
  Teams.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });
  // and stories
  Stories.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });
});