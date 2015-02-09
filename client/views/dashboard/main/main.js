Template.dashboardMain.helpers({
  'documents': function () {
    return ACollection.find({}, {sort: {date: 1}});
  }
});
