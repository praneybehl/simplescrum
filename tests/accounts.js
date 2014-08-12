var assert = require('assert'),
    _ = require('underscore');

/**
 * Global account object.
 * @type {Object}
 */
var _account = {
  _audits: [],
  title: 'Test Account',
  body: 'This is a test account.',
  created_by: 'TestUser'
};

suite('Accounts', function() {
  test('validate account object', function(done, server) {
    server.eval(function(doc) {
      AccountSchema.clean(doc); // clean and get default values

      // validate and get invalid keys
      AccountSchema.namedContext('testing').validate(doc);
      var keys = AccountSchema.namedContext('testing').invalidKeys();

      emit('keys', keys);
    }, _account).once('keys', function(keys) {
      // display invalid keys
      if (!_.isEmpty(keys)) console.log(keys);

      assert.equal(keys.length, 0); // should have no errors
      done();
    });
  });

  test('creating an account', function(done, server, client) {
    server.eval(function() {
      _Accounts.find().observe({
        added: function(doc) {
          emit('doc', doc);
        }
      });
    }).once('doc', function(doc) {
      assert.equal(doc.title, 'Test Account');
      done();
    });

    client.eval(function(doc) {
      AccountSchema.clean(doc); // clean and get default values

      _Accounts.insert(doc, function(error) {
        if (error) console.log(error);
      });
    }, _account);
  });

  test('checking for _audits on change', function(done, server, c1, c2) {
    server.eval(function() {
      _Accounts.find().observe({
        changed: function(newDoc, oldDoc) {
          emit('update', newDoc);
        }
      });
    }).once('update', function(doc) {
      console.log('UPDATE');
      console.log(doc);
      assert.equal(doc._audits.length, 1);
      done();
    });

    c1.eval(function() {
      _Accounts.find().observe({
        added: function(doc) {
          console.log('ADDED');
          console.log(doc);

          _Accounts.update(
            {_id: doc._id},
            {$set: {title: 'New Account Title'}},
            function(error) {
              if (error) console.log(error);
            }
          );
        }
      });
    });

    c2.eval(function(doc) {
      AccountSchema.clean(doc); // clean and get default values

      _Accounts.insert(doc, function(error, _id) {
        if (error)
          console.log(error);
        else
          emit('insert', _id);
      });
    }, _account);
  });
});