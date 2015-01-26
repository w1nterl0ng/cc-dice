//Decides which aDocument is available to clients via subscriptions.
//
Meteor.publish("aSubscription", function () {
  return ACollection.find({score : 1});
});
