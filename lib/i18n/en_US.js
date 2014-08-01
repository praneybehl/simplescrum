/**
 * This is the english translation for the application.
 * @type {String} The language translation key.
 */
i18n.map('en_US', {
  toggle_nav: 'Toggle navigation',
  title: 'Simple Scrum',
  version: version(),

  // general
  created_by: 'Created By',
  date_created: 'Date Created',
  modified_by: 'Modified By',
  date_modified: 'Date Modified',

  // audits
  audit: {
    field: 'Field',
    old: 'Old Value',
    'new': 'New Value'
  },

  // account
  account: {
    title: 'Account Name',
    body: 'Description'
  },

  // user
  users: 'Users',
  user: {
    _account: 'Account',
    emails: {
      address: 'Email Address',
      verified: 'Email verified?'
    },
    profile: {
      fname: 'First Name',
      mname: 'Middle Name',
      lname: 'Last Name',
      phone: 'Phone Number',
      address: {
        street1: 'Street 1',
        street2: 'Street 2',
        street3: 'Street 3',
        city: 'City',
        state: 'State',
        zip: 'Zip'
      }
    },
    services: 'Services'
  },

  // project
  projects: 'Projects',
  project: {
    _account: 'Account',
    title: 'Project Name',
    body: 'Project Summary',
    status: 'Status',
    date_due: 'Date Due'
  },

  // sprint
  sprints: 'Sprints',
  sprint: {
    _account: 'Account',
    _project: 'Project',
    title: 'Sprint Name',
    body: 'Sprint Summary',
    status: 'Status',
    date_start: 'Start Date',
    date_end: 'End Date'
  },

  // story
  stories: 'User Stories',
  story: {
    _account: 'Account',
    _project: 'Project',
    _sprint: 'Sprint',
    title: 'Sprint Name',
    body: 'Sprint Summary',
    priority: 'Priority',
    points: 'Point(s)',
    hours: 'Hour(s)',
    teams: 'Team(s)',
    users: 'User(s)',
    status: 'Status',
    type: 'Type'
  },

  // team
  teams: 'Teams',
  team: {
    _account: 'Account',
    title: 'Role Name',
    users: 'Assigned User(s)',
    roles: 'Assigned Role(s)'
  },

  // errors section
  error: {
    404: 'The page you were trying to reach can no longer be found.  Please try again.'
  },

  // buttons section
  button: {
    search: 'Search'
  }
});