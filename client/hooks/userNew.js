AutoForm.hooks({
  userNew: {
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

      // setup names, phone & address
      doc.profile = _.extend(doc.profile, {
        _audits: [],
        fname: $('input[name="profile.fname"]').val(),
        mname: $('input[name="profile.mname"]').val(),
        lname: $('input[name="profile.lname"]').val(),
        phone: $('input[name="profile.phone"]').val(),
        address: {
          _audits: [],
          street1: $('input[name="profile.address.street1"]').val(),
          street2: $('input[name="profile.address.street2"]').val(),
          street3: $('input[name="profile.address.street3"]').val(),
          city: $('input[name="profile.address.city"]').val(),
          state: $('select[name="profile.address.state"]').val(),
          zip: parseInt($('input[name="profile.address.zip"]').val()),
          created_by: Meteor.userId(),
          date_created: _date
        },
        created_by: Meteor.userId(),
        date_created: _date
      });

      // setup email
      doc.emails = [{
        _audits: [],
        address: $('input[name="emails.$.address"]').val(),
        verified: false,
        created_by: Meteor.userId(),
        date_created: _date
      }];

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
      Router.go('usersView', {_id: result});
    }
  }
});