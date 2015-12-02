Handlebars.registerHelper('getSpeaker', function(title) {
  return title.split(' | ')[1];
});

Handlebars.registerHelper('getTitle', function(title) {
  return title.split(' | ')[0];
});

