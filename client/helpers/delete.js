/**
 * This function will display the delete modal
 * and will handle the callback as necessary.
 * @param {Function} callback The "Yes" function.
 */
Delete = function(callback) {
  try {
    $('#_delete').remove(); // remove instances

    // our callback function
    var _cb = function(del) {
      $('#_delete').modal('hide'); // hide modal

      // yes was clicked so call-back
      if (!!del) {
        callback(); // call callback function
      }
    };

    // insert new instance
    UI.insert(
      UI.renderWithData(
        Template._delete,
        {callback: _cb} // above function
      ),
      document.body
    );
  } catch (error) {
    callback(error);
  }
};