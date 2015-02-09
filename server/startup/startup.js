//Checks when the server starts up if aCollection is empty and creates a document if it is.
//
Meteor.startup(function () {
  if (ACollection.find().count() === 0) {
    ACollection.insert({
      score : 0
    });
  }
});
