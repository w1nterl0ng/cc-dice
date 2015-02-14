Template.dashboardMain.helpers({
  'documents': function () {
    return ACollection.find({}, {sort: {score: -1}});
  }
});


Template.dashboardMain.events({
  'click #addScore': function () {
    var selectedDocId = this._id;
    Meteor.call('callFromATemplateHelper', selectedDocId);
  }
});
