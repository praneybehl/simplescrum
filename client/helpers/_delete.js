/**
 * This function will run after template is rendered.
 * @return {function} The function to be ran.
 */
Template._delete.rendered = function() {
  // setup our module
  this.$('#_delete').modal({
    show: true
  });
};

Template._delete.helpers({

});

Template._delete.events({
  /**
   * This function will return true for yes delete item.
   * @param  {object} e The click event.
   * @return {boolean}   True for delete.
   */
  'click .btn-yes': function(e) {
    kill(e);

    if (this && this.callback)
      this.callback(true);
  },
  /**
   * This function will return false for no delete item.
   * @param  {object} e The click event.
   * @return {boolean}   False for no delete.
   */
  'click .btn-no': function(e) {
    kill(e);

    if (this && this.callback)
      this.callback(false);
  }
});