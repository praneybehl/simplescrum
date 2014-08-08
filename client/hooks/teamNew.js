AutoForm.hooks({
  teamNew: {
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

      return doc;
    }
  }
});