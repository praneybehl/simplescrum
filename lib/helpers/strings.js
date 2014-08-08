/**
 * This function will uppercase the first letter
 * in the supplied string and lowercase the rest.
 * @param  {string} _string The string to modify.
 * @return {string}         The uppercased string.
 */
ucfirst = function(_string) {
  check(_string, String);

  // now uppercase our string
  return (_string.substr(0, 1).toUpperCase() + _string.substr(1, (_string.length - 1)).toLowerCase());
}
/**
 * This is to make the function usable in templates.
 * This function will uppercase the first letter
 * in the supplied string and lowercase the rest.
 * @param  {string} _string The string to modify.
 * @return {string}         The uppercased string.
 */
UI.registerHelper('ucfirst', function(_string) {
  return ucfirst(_string);
});