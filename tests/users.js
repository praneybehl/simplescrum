var assert = require('assert'),
    _ = require('underscore');

var _user = {
  email: 'test@email.com',
  password: 'password',
  profile: {
    fname: 'John',
    lname: 'Doe'
  }
};

suite('Users', function() {
  test('creating a user', function(done, server, client) {
    server.eval(function() {
      Meteor.users.find().observe({
        added: addNewUser
      });

      function addNewUser(user) {
        emit('user', user);
      }
    }).once('user', function(user) {
      assert.equal(user.profile.fname, 'John');
      done();
    });

    client.eval(function(doc) {
      Accounts.createUser(doc);
    }, _user);
  });
});