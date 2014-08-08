var assert = require('assert');

suite('Strings', function() {
  test('ucfirst letter', function(done, server) {
    server.eval(function() {
      emit('item', ucfirst('testing'));
    });

    server.once('item', function(item) {
      if (item.substr(0, 1) === 'T')
        assert.ok(item);
      else
        assert.fail(item);

      done();
    });
  });
});