Template.sprintList.helpers({
  /**
   * Return the current project.
   * @return {string} The Projects._id.
   */
  _project: function() {
    return Current.project();
  }
});