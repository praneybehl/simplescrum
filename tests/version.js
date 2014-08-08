var assert = require('assert');

suite('Version', function() {
  test('return version number', function(done, server) {
    server.eval(function() {
      emit('item', getVersion());
    });

    server.once('item', function(item) {
      assert.ok(item);
      done();
    });
  });
});