/**
 * Global client Config object for single storage place for
 * settings.
 * @global
 * @type {Object}
 */
Config = {
  /**
   * Add our multiselect global client configuration to the Config
   * object.
   * @type {Object}
   */
  multiselect: {
    numberDisplayed: 3, // number displayed on button before number selected shown
    buttonWidth: '100%', // full width
    maxHeight: 300, // no more than 400px in height, scrollbar
    includeSelectAllOption: true, // will include select all checkbox
    includeSelectAllIfMoreThan: 1, // if more than 1 show select all
    selectAllText: __('button.select_all') || 'Select All', // the select all label
    disableIfEmpty: true // disabled if no options
  },
  /**
   * Will return the options attached to this Config object.
   * @param  {string} key The key for the options to return.
   * @return {object|string|number|boolean}     The returned configuration(s).
   */
  get: function(key) {
    return this[key];
  }
};
