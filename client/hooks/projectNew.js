AutoForm.hooks({
  projectNew: {
    before: {
      insert: function(doc, template) {
        return doc;
      }
    },
    formToDoc: function(doc, ss, formId) {
      var _date = new Date();

      // clean our doc with simple-schema
      doc = ss.clean(doc);

      // setup account
      doc._account = Meteor.user()._account;

      // setup date
      doc.date_due = moment(doc.date_due).toDate();

      return doc;
    },
    /**
     * This will load the item after it has been added.
     * @global
     * @param  {string} operation insert, update, remove or method name
     * @param  {object|string|boolean} result    Returned from submit.
     * @param  {object} template  The template object.
     * @return {void}           Nothing
     */
    onSuccess: function(operation, result, template) {
      Router.go('project-update', {_project: result});
    }
  }
});