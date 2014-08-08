/**
 * This helpers file will handle events.
 */

/**
 * This function will kill the event from
 * continuing.
 * @param  {object} e The event object to stop.
 * @return {void}   Nothing.
 */
kill = function(e) {
  e.preventDefault();
  e.stopPropagation();
}