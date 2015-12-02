Handlebars.registerHelper('getSpeaker', function(title) {
  return title.split(' | ')[1];
});

Handlebars.registerHelper('getTitle', function(title) {
  return title.split(' | ')[0];
});

Handlebars.registerHelper('dateformat', function(feedDate) {
  return moment(feedDate, 'ddd, DD MMM YYYY HH:mm:ss Z').format('MMMM Do, YYYY h:mm a');
});

Handlebars.registerHelper('imageLink', function(itunesImage) {
  return itunesImage['@href'];
});
