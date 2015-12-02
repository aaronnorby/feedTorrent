$.getJSON("https://agile-thicket-5774.herokuapp.com/feed")
  .done(function(feed) {
    console.log("feed: ", feed);

    var entrySource = $("#entry-template").html();
    var entryTemplate = Handlebars.compile(entrySource);
    var html = entryTemplate(feed);

    $(".entries").html(html);
    $(".details").on("click", function(e) {
      $(this).toggleClass("no-clutter");
    });
  })
  .fail(function(jqxhr, status, error) {
    console.log("Request failed with status " + status + " and error " + error); 
  });

