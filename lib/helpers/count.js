/**
 * This function will return the array count.
 * @param  {array} _items The items to count.
 * @return {number|object}        The length of the items.
 */
getCount = function(_items) {
  if (!_items) return _items;

  if (_.isArray(_items))
    return _items.length;

  return _items;
};

/**
 * Register getCount with templates.
 * This function will return the array count.
 * @param  {array} _items The items to count.
 * @return {number|object}        The length of the items.
 */
UI.registerHelper('getCount', function(_items) {
  return getCount(_items);
});