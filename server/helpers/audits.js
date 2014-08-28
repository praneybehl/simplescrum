/**
 * @todo Need to come up with a more efficient way of building _audits.
 * TODO: Need to come up with a more efficient way of building _audits.
 */

/**
 * This function will return the value of the
 * supplied document at a given key.  Key can
 * be period delimitted.
 * @param  {object} doc The document to get value from.
 * @param  {string} key The key to use on the document.
 * @return {string|number|object}     The value at the key.
 */
getValue = function(doc, key) {
  return eval('doc.'+key);
};

/**
 * This function will build the _audits array for this session.
 * @param  {string} userId     The user _id.
 * @param  {object} doc        The object being changed.
 * @param  {object} fieldNames Array of fields changed.
 * @param  {object} modifier   The modifier object for the document.
 * @return {object}            The modified modifier object.
 */
getAudits = function(userId, doc, fieldNames, modifier) {
  if (!userId) return; // skip if not logged in

  // validate object types
  check(userId, String);
  check(doc, Object);
  check(fieldNames, [String]);
  check(modifier, Object);

  // get our omitFields from /private/omitField.txt
  try {
    // get all non omitted fields
    var _fields = Assets.getText('omitFields.txt'),
        _audits = [];

    _fields = _fields.replace(/(?:\r\n|\r|\n)/g, '').split(','); // replace new line characters

    // lets get our modifier fields and omit
    var _changes = _.omit(modifier.$set, _fields);

    // if changes not empty loop and add to _audits
    if (!_.isEmpty(_changes)) {
      _.each(_changes, function(v, k) { // key => value loop
        _audits.push({
          field: k,
          old: getValue(doc, k),
          'new': v,
          created_by: userId,
          date_created: new Date()
        });
      });
    }

    // setup modifier object for return
    modifier.$push = modifier.$push || {};
    modifier.$push._audits = {$each: _audits};

    return modifier;
  } catch (error) {
    console.log(error);
  }
};