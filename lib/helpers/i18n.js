/**
 * This will add the common __ function call known to the
 * development world as i18n translation function.  All
 * translations should go through this function.  That way
 * if we change i18n packages we will only have one place
 * to change to matchup again.
 * @param  {string} key The translation key.
 * @return {string}     The translated string.
 */
__ = function(key) {
  return i18n(key);
};

/**
 * This is a meteor helper function that will give access
 * to the templates.  Ex. {{__ 'title'}} = "Simple Scrum"
 * @param  {string} key The translation key.
 * @return {string}     The translated string.
 */
UI.registerHelper('__', function(key) {
  return new Spacebars.SafeString(__(key));
});