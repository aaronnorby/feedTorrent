

// settings for the spinner 
var opts = {
      lines: 11             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 2              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 0.25          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 60            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
};

// set the spinner to run until ajax request comes back
var entriesContainer = $('.entries')[0];
var spinner = new Spinner(opts).spin(entriesContainer);

$.getJSON('https://agile-thicket-5774.herokuapp.com/feed')
  .done(function(feed) {
    // stop the spinner after request comes back
    spinner.stop();

    // compile and send the data to the handlebars template
    var entrySource = $('#entry-template').html();
    var entryTemplate = Handlebars.compile(entrySource);
    var html = entryTemplate(feed);

    $('.entries').html(html);

    $('.details').css('background-image', function() {
      return 'url(' + this.dataset.image + ')';
    });

    $('.details').on('click', function(e) {
      $(this).toggleClass('no-clutter');
    });
  })
  .fail(function(jqxhr, status, error) {
    console.log('Request failed with status ' + status + ' and error ' + error); 
  });

