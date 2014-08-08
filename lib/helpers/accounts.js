/**
 * Run this when meteor starts.
 * @return {void} Nothing.
 */
Meteor.startup(function() {
  // check for Accounts
  if (!!Accounts && !!Accounts._loginButtons) {
    /**
     * This function will override the dislpayName function
     * for accounts.  This function is used by the loginButtons
     * template.
     * @override
     * @return {string} The name of the logged in user.
     */
    Accounts._loginButtons.displayName = function() {
      return getName((this.userId || Meteor.userId()));
    };
  }
});
