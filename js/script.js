$(function(){
	
	if (!('reversed' in document.createElement('ol'))) {

		// run the code on each ordered list with a 'reversed' attribute.
		var myLists = $('ol[reversed]'),
			currCount = null,
			currChildren = null;

		myLists.each(function() {

			// check the existence of the start attribute
			if ($(this).attr('start')) {
				
				// if it exists, convert it to an integer; also ensures even decimal values work
				currCount = parseInt($(this).attr('start'), 10);
				
				// If it wasn't a number, it will return 'NaN'; if so, use the number of list items instead
				if (isNaN(currCount)) {
					currCount = $(this).children().length();
				}
			
			// do this if the start attribute is not present
			// the first number is derived from the number of list items
			} else {
				currCount = $(this).children().length();
			}
			
			// grab all the child list items
			currChildren = $(this).children();
			
			// go through each list item, adding the 'value' attribute plus currCount number
			// then subract one from currCount so we're ready for the next one
			currChildren.each(function() {

			   $(this).attr('value', currCount);
			   currCount = currCount - 1;

			});
			
		});
		
	}
});