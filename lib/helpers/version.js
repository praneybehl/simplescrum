/**
 * This function will return the applications
 * current version number.
 * @return {string} The version number as string.
 */
getVersion = function() {
  return 'v0.0.1';
}
UI.registerHelper('getVersion', function() {
  return new Spacebars.SafeString(getVersion());
});