/**
 * This function will return the fromNow
 * wording from moment.js.
 * @param  {date} date The date to get fromNow.
 * @return {string|date}      The date string or object.
 */
fromNow = function(date) {
  check(date, Date);

  if (moment(date).isValid())
    return moment(date).fromNow();

  return date;
};

/**
 * Register fromNow with templates.
 * This function will return the fromNow
 * wording from moment.js.
 * @param  {date} date The date to get fromNow.
 * @return {string|date}      The date string or object.
 */
UI.registerHelper('fromNow', function(date) {
  return fromNow(date);
});