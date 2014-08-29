/**
 * This function will return 'active' if the
 * current router _id param matches supplied _id.
 * @param  {string}  _id The _id to check if selected.
 * @return {string}     'active' if match, '' if not
 */
isActive = function(_id) {
  check(_id, String);

  if (Router.current().params._id === _id
      || Router.current().params._project === _id
      || Router.current().params._sprint === _id
      || Router.current().params._story === _id)
    return 'active';

  return '';
};
/**
 * This function registers isActive with the templates.
 * This function will return 'active' if the
 * current router _id param matches supplied _id.
 * @param  {string}  _id The _id to check if selected.
 * @return {string}     'active' if match, '' if not
 */
UI.registerHelper('isActive', function(_id) {
  return isActive(_id);
});