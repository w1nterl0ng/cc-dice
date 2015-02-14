//Validate a callFromATemplateEvent and if so update a ACollection.
//
Meteor.methods({
  'callFromATemplateEvent': function (selectedDocId) {
    if (1 < 2) {
      ACollection.update(selectedDocId, {$inc: {score: 1}});
    }
  }
});