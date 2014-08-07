var assert = require('assert');

suite('Users', function() {
  // test our UserSchema
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

    client.eval(function() {
      Accounts.createUser({
        email: 'test@email.com',
        password: 'password',
        profile: {
          fname: 'John',
          lname: 'Doe'
        }
      });
    });
  });
});