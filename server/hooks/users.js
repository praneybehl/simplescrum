Meteor.users.before.remove(function(userId, doc) {
  // we want to remove the user from teams and stories
  Teams.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });

  Stories.update({users: userId}, {$pull: {users: userId}}, function(error) {
    if (error) console.log(error);
  });
});