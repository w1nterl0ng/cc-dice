//Validate a callFromATemplateHelper and if so update a ACollection.
//
Meteor.methods({
  'callFromATemplateHelper': function (selectedDocId) {
    if (1 < 2) {
      ACollection.update(selectedDocId, {$inc: {score: 1}});
    }
  }
});