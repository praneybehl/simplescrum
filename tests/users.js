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
      Meteor.users.insert({
        _audits: [],
        _account: 'Test',
        emails: [{address: 'test@email.com', verified: false}],
        profile: {
          fname: 'John',
          lname: 'Doe'
        },
        created_by: 'TestUser',
        date_created: new Date()
      });
    });
  });

  // try the fix for the timeout
  test('creating a user (test)', function(done, server, client) {
    // observe the collection on the server and test
    server.eval(function() {
      Meteor.users.find().observe({
        added: addNewUser
      });

      function addNewUser(user) {
        emit('user', user);
      }
      emit('ready');
    }).once('user', function(user) {
      // test our user
      assert.equal(user.profile.fname, 'John');
      done();
    }).once('ready', function() {
      // insert our new user
      client.eval(function() {
        Meteor.users.insert({
          _audits: [],
          _account: 'Test',
          emails: [{address: 'test@email.com', verified: false}],
          profile: {
            fname: 'John',
            lname: 'Doe'
          },
          created_by: 'TestUser',
          date_created: new Date()
        });
      });
    });
  });
});