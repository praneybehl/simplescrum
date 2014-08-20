AutoForm.addHooks(null, {
  /**
   * This function will display a success alert.
   * @global
   * @param  {string} operation insert, update, remove or method name
   * @param  {object|string|boolean} result    Returned from submit.
   * @param  {object} template  The template object.
   * @return {void}           Nothing
   */
  onSuccess: function(operation, result, template) {
    Alert.s(__('message.item_saved'), ucfirst(operation), 'OK');
  },
  /**
   * This function will display an error message.
   * @global
   * @param  {string} operation validation, insert, update, remove or method name
   * @param  {object} error     The error object.
   * @param  {object} template  The template object.
   * @return {void}           Nothing.
   */
  onError: function(operation, error, template) {
    Alert.e(error, operation);
  }
});