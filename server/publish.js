/**
 * This file will handle the publishing for all of our
 * meteor collections.
 *
 * All publish functions will lock down the user to
 * their account.  Each publish function will take
 * two arguments: query and options.
 *
 * TODO: Minimize the code; combine account check into fn.
 */

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('allUsers', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_account: _account}, _query);
    _options = _.extend({limit: 1000, sort: {'profile.lname': 1, 'profile.fname': 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._account
      && _query._account !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._account = _account;
    }

    // return our cursor object
    return Meteor.users.find(_query, _options);
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('allRoles', function() {
  if (this.userId) {
    return Roles.getAllRoles();
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('accounts', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_id: _account}, _query);
    _options = _.extend({limit: 1000, sort: {title: 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._id
      && _query._id !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._id = _account;
    }

    // return our cursor object
    return _Accounts.find(_query, _options);
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('projects', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_account: _account}, _query);
    _options = _.extend({limit: 1000, sort: {title: 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._account
      && _query._account !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._account = _account;
    }

    // return our cursor object
    return Projects.find(_query, _options);
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('sprints', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_account: _account}, _query);
    _options = _.extend({limit: 1000, sort: {title: 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._account
      && _query._account !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._account = _account;
    }

    // return our cursor object
    return Sprints.find(_query, _options);
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('stories', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_account: _account}, _query);
    _options = _.extend({limit: 1000, sort: {title: 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._account
      && _query._account !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._account = _account;
    }

    // return our cursor object
    return Stories.find(_query, _options);
  }
});

/**
 * This function will take a query and options value and
 * return a mongodb cursor object.
 * @param  {object} _query   The query object.
 * @param  {object} _options The query options.
 * @return {object}          The mongodb cursor object.
 */
Meteor.publish('teams', function(_query, _options) {
  if (this.userId) {
    // get our user account id
    var _account = getUserAccountID(this.userId);

    // combine defaults with new
    _query = _.extend({_account: _account}, _query);
    _options = _.extend({limit: 1000, sort: {title: 1}}, _options);

    // check the account for current user unless super-admin
    if (_query._account
      && _query._account !== _account
      && Roles.userIsInRole(this.userId, 'super-admin')) {
      // the user is not a super-admin so set back
      _query._account = _account;
    }

    // return our cursor object
    return Teams.find(_query, _options);
  }
});