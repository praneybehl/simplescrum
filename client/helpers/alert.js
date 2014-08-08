/**
 * This helper will handle the different aspects of the
 * alert system.  This way if we want something other than
 * toastr we can change it here in one place.
 */

/**
 * Setup our toastr options.
 */
toastr.options = _.extend(toastr.options, {
  closeButton: true // we want to be able to close them
});

/**
 * Our local error messaging system.
 * @type {Object}
 */
Alert = {
  /**
   * This function will display an error message.  If an error
   * object is supplied it will fill in the code and title.
   * @param  {object|string} error The error object or string.
   * @param  {string} title The error title.
   * @param  {string} code  The error code.
   * @return {void}       Nothing.
   */
  e: function(error, title, code) {
    this._do('error', error, title, code);
  },
  /**
   * This function will display a success message.  If an error
   * object is supplied it will fill in the code and title.
   * @param  {object|string} error The error object or string.
   * @param  {string} title The error title.
   * @param  {string} code  The error code.
   * @return {void}       Nothing.
   */
  s: function(error, title, code) {
    this._do('success', error, title, code);
  },
  /**
   * This function will display a warning message.  If an error
   * object is supplied it will fill in the code and title.
   * @param  {object|string} error The error object or string.
   * @param  {string} title The error title.
   * @param  {string} code  The error code.
   * @return {void}       Nothing.
   */
  w: function(error, title, code) {
    this._do('warning', error, title, code);
  },
  /**
   * This function will display an info message.  If an error
   * object is supplied it will fill in the code and title.
   * @param  {object|string} error The error object or string.
   * @param  {string} title The error title.
   * @param  {string} code  The error code.
   * @return {void}       Nothing.
   */
  i: function(error, title, code) {
    this._do('info', error, title, code);
  },
  /**
   * This function is the private function that will actually display
   * the alert message using toastr.
   * @private
   * @param  {string} type  error, success, warning, info
   * @param  {string} title The error title.
   * @param  {string} code  The error code.
   * @return {void}       Nothing.
   */
  _do: function(type, error, title, code) {
    title = title || 'Error';
    code = code || '0';

    // if error type then get information
    if (typeof error === 'object') {
      // if invalidKeys then set as message
      if (!!error.invalidKeys && !_.isEmpty(error.invalidKeys)) {
        var _str = error.message+'<br /><ul>'; //open

        // setup our key prefix
        var _pref = '',
            _route = Router.current().route.name;
        if (_route.toLowerCase().indexOf('profile') >= 0) {
          _pre = 'user';
        } else if (_route.toLowerCase().indexOf('users') >= 0) {
          _pre = 'user';
        } else if (_route.toLowerCase().indexOf('projects') >= 0) {
          _pre = 'project';
        } else if (_route.toLowerCase().indexOf('sprints') >= 0) {
          _pre = 'sprint';
        } else if (_route.toLowerCase().indexOf('stories') >= 0) {
          _pre = 'story';
        } else if (_route.toLowerCase().indexOf('settings') >= 0) {
          _pre = 'setting';
        } else {
          _pre = '';
        }

        // loop over array and build _str
        _.each(error.invalidKeys, function(key) {
          _str += '<li>'; // open
          _str += '<strong>'+__(_pre+'.'+key.name)+'</strong> = '+ucfirst(key.type);
          _str += '</li>'; // close
        });

        _str += '</ul>'; // close

        // setup
        title = 'Invalid Keys';
        error = _str;
        code = '400';
      } else {
        // we have a normal error object so process
        title = error.errorType || title;
        code = error.error || code;
        error = error.reason || error.message;
      }
    }

    // setup our message
    var _msg = '<strong>['+code+'] '+ucfirst(title)+'</strong>: '+error;

    // now display based on type
    switch(type) {
      case 'error':
        toastr.error(_msg);
        break;
      case 'success':
        toastr.success(_msg);
        break;
      case 'warning':
        toastr.warning(_msg);
        break;
      case 'info':
        toastr.info(_msg);
        break;
      default:
        toastr.error(_msg);
        break;
    }
  }
};