//Checks when the server starts up if aCollection is empty and creates a document if it is.
//
Meteor.startup(function () {
  if (ACollection.find().count() === 0) {
    ACollection.insert({
      score : 3,
      name : 'a',
      date : new Date()
    });
    ACollection.insert({
      score : 6,
      name : 'b',
      date : new Date()
    });
    ACollection.insert({
      score : 2,
      name : 'c',
      date : new Date()
    });
    ACollection.insert({
      score : 3,
      name : 'd',
      date : new Date()
    });
    ACollection.insert({
      score : 8,
      name : 'e',
      date : new Date()
    });
    ACollection.insert({
      score : 4,
      name : 'f',
      date : new Date()
    });
    ACollection.insert({
      score : 8,
      name : 'g',
      date : new Date()
    });
  }
});
