/**
 * This hook will run before every update.
 * @param  {string} userId     The user _id.
 * @param  {object} doc        The document to be modified.
 * @param  {object} fieldNames An array of changed fields.
 * @param  {object} modifier   The modifications to be applied.
 * @param  {object} options    Options for hook.
 * @return {object}            The modified object to go to db.
 */
_Accounts.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier = getAudits(userId, doc, fieldNames, modifier); // setup audits
});