Template._loginButtonsAdditionalLoggedInDropdownActions.events({
  'click #login-buttons-edit-profile': function(e) {
    e.stopPropagation();

    Template._loginButtons.toggleDropdown(); // hide our dropdown

    Router.go('profile');
  }
});