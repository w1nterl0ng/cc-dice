//You want the different routes in your website to have titles and meta tags for search engines.
//In case no route specific titles & meta tags are set this default will be used.
//To change titles and meta tags that are set at server startup view the /server/config/headConfig.js file.


Meteor.startup(function() {
  if(Meteor.isClient){
    return SEO.config({
      title: 'Project Title',
      meta: {
        'description': 'Project Title is a project about project subject.'
      }
    });
  }
});
