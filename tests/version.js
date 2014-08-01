var assert = require('assert');

suite('Version', function() {
  test('return version number', function(done, server) {
    server.eval(function() {
      emit('version', getVersion());
    });

    server.once('version', function(version) {
      assert.ok(version);
      done();
    });
  });
});