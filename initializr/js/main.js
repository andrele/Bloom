// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:
function transitionPages()
{
	console.log('transition');
}

$('#goal').typeahead([
{
	name: 'availableGoals',
	local: [ "Run a marathon", "Learn to play the ukelele", "Plan a wedding", "Quit smoking cigarettes", "Learn to speak Chinese this year"]
}
]);

$('#goal').keypress(function (e)
{
  if (e.which == 13)
  {
    transitionPages();
  }
});

$( "#Start" ).click(function()
{
  transitionPages();
 
});


