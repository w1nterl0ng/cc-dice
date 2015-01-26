//Validates a callFromATemplateHelper and updates it into aCollection.
//
Meteor.methods({
  'callFromATemplateHelper': function (aDocument) {
    if (aDocument.score === 0) {
      ACollection.update(aDocument, {$inc: {score: 1}});
    }
  }
});