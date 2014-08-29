AutoForm.hooks({
  storyView: {
    before: {
      insert: function(doc, template) {
        return doc;
      }
    },
    formToDoc: function(doc, ss, formId) {
      var _date = new Date();

      // clean our doc with simple-schema
      doc = ss.clean(doc);
      // other cleaning
      doc.teams = doc.teams || [];
      doc.users = doc.users || [];

      // setup account
      doc._account = Meteor.user()._account;

      // setup project
      doc._project = $('#_project').val();
      Session.set('_project', doc._project);

      // setup other stored values
      Session.set('type', $('#type').val());
      Session.set('status', $('#status').val());
      Session.set('priority', $('#priority').val());

      return doc;
    },
    onSuccess: function(operation, result, template) {
      $('#_project').val(Session.get('_project'));
      $('#type').val(Session.get('type'));
      $('#status').val(Session.get('status'));
      $('#priority').val(Session.get('priority'));

      Session.set('story_type', 'insert');
      Session.set('story_id', null);
    }
  }
});