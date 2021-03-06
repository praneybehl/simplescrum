/**
 * This function will return the roles for the given
 * userId.
 * @param  {string} userId The userId to retrieve roles for.
 * @return {string}        The roles comma string.
 */
getRoles = function(userId) {
  if (!userId) return userId;

  check(userId, String);

  var _roles = Roles.getRolesForUser(userId);
  console.log(_roles);
  return _roles.join(', ');
};

/**
 * Register getRoles with templates.
 * This function will return the roles for the given
 * userId.
 * @param  {string} userId The userId to retrieve roles for.
 * @return {string}        The roles comma string.
 */
UI.registerHelper('getRoles', function(userId) {
  return getRoles(userId);
});