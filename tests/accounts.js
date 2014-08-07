var assert = require('assert');

suite('Accounts', function() {
  test('creating an account', function(done, server, client) {
    server.eval(function() {
      _Accounts.find().observe({
        added: addNewAccount
      });

      function addNewAccount(account) {
        emit('account', account);
      }
    }).once('account', function(account) {
      assert.equal(account.title, 'Test Account');
      done();
    });

    client.eval(function() {
      _Accounts.insert({
        _audits: [],
        title: 'Test Account',
        body: 'This is a test account.',
        created_by: 'TestUser',
        date_created: new Date()
      });
    });
  });
});