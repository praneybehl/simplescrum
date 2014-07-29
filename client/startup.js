/**
 * This function is to handle some basic configuration at
 * program start.  For now this will handle our setting of
 * the language.
 */
Meteor.startup(function() {
  // set our default language to english for now
  i18n.setDefaultLanguage('en_US'); // we speak english yes
  i18n.setLanguage('en_US'); // set to english for now, will be set my user profile later
  i18n.showMissing('*<%=label%>*');  // if missing will show *key*
});