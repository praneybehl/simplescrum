/**
 * This is the english translation for the application.
 * @type {String} The language translation key.
 */
i18n.map('en_US', {
  toggle_nav: 'Toggle navigation',
  title: 'Simple Scrum',
  version: getVersion(),

  // general
  created_by: 'Created By',
  date_created: 'Date Created',
  modified_by: 'Modified By',
  date_modified: 'Date Modified',

  // blank
  blank: 'EMPTY',

  // delete
  'delete': {
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this item?  Once the item is deleted it cannot be reversed.',
    fail: 'There was an error during the process of asking for delete permission.'
  },

  // login
  login: {
    title: 'Please login',
    message: 'You must be logged in to view this site.',
    buttons: {
      profile: 'My Profile'
    }
  },

  // home
  home: {
    title: 'Home Page',
    message: 'Welcome to your home page.  Please click a section to continue.',
    user: 'Manage your users and teams.',
    project: 'Manage your projects, milestones and sprints here.',
    story: 'Manage your user stories, backlogs and display graphs.',
    setting: 'Update and change the settings for this account.',
    summary: 'This section will show the latest parts of the site: users, projects, sprints and user stories.'
  },

  // audits
  audits: 'Audits',
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
    roles: 'Roles/Permissions',
    emails: {
      name: 'User Emails',
      address: 'Email Address',
      verified: 'Email verified?'
    },
    profile: {
      name: 'User Profile',
      names: 'Names',
      userName: 'User Name',
      fname: 'First Name',
      mname: 'Middle Name',
      lname: 'Last Name',
      phone: 'Phone Number',
      address: {
        name: 'User Address',
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
    title: 'Story Name',
    body: 'Story Summary',
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
    title: 'Team Name',
    users: 'Assigned User(s)',
    roles: 'Assigned Role(s)'
  },

  // errors section
  error: {
    empty: 'There are no items to display.',
    404: 'The page you were trying to reach can no longer be found.  Please try again.'
  },

  // test
  test: {
    title: 'Test Title',
    message: 'This is an example detailed view of either a user, team, project, sprint, user story or graph.'
  },

  // buttons section
  button: {
    create: 'Create',
    update: 'Update',
    remove: 'Delete',
    user: 'User',
    team: 'Team',
    project: 'Project',
    sprint: 'Sprint',
    story: 'Story',
    cancel: 'Cancel',
    reset: 'Reset',
    search: 'Search',
    go: 'Go',
    profile: 'Update Profile',
    yes: 'Yes',
    no: 'No',
    select_all: 'Select All'
  }
});