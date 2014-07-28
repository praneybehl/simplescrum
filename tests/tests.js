var assert = require('assert');

suite('Tests', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Tests.insert({title: 'Hello World!'});
      var docs = Tests.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });

  test('in both server and client', function(done, server, client) {
    server.eval(function() {
      Tests.find().observe({
        added: addedNewTest
      });

      function addedNewTest(test) {
        emit('test', test);
      }
    }).once('test', function(test) {
      assert.equal(test.title, 'Hello World!');
      done();
    });

    client.eval(function() {
      Tests.insert({title: 'Hello World!'});
    });
  });

  test('using two clients', function(done, server, c1, c2) {
    c1.eval(function() {
      Tests.find().observe({
        added: addedNewTest
      });

      function addedNewTest(test) {
        emit('test', test);
      }

      emit('done');
    }).once('test', function(test) {
      assert.equal(test.title, 'from c2');
      done();
    }).once('done', function() {
      c2.eval(insertTest);
    });

    function insertTest() {
      Tests.insert({title: 'from c2'});
    }
  });
});