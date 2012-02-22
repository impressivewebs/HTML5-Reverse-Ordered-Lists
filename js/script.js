if (!('reversed' in document.createElement('ol'))) {

	(function () {
		'use strict';
		// Run the code on each ordered list with a "reversed" attribute.
		var lists = document.getElementsByTagName('ol'),
			length = lists.length,
			i,
			j,
			child,
			currChildren,
			childrenLength,
			start,
			currCount,
			val;

		for (i = 0; i < length; i += 1) {

			child = lists[i];

			if (child.getAttribute('reversed') !== null) {

				currChildren = child.getElementsByTagName('li');
				childrenLength = currChildren.length;
				start = child.getAttribute('start');

				// Check the existence of the start attribute and if it's
				// a number.
				if (start !== null && !isNaN(start)) {
					currCount = start;
				} else {
					// Do this if the start attribute is not present. The first
					// number is derived from the number of list items.
					// (Ugh; Do we need double loops to get the correct count?)

					currCount = 0;

					for (j = 0; j < childrenLength; j += 1) {

						if (currChildren[j].parentNode === child) {
							currCount += 1;
						}

					}
				}
				// Go through each list item, adding the 'value' attribute 
				// plus currCount number then subtract one from currCount 
				// so we're ready for the next one.
				for (j = 0; j < childrenLength; j += 1) {

					if (currChildren[j].parentNode === child) {
						// Per spec, if set, the value attribute should be used
						// and renumbering started from there.
						val = currChildren[j].getAttribute('value');

						if (val !== null && !isNaN(val)) {
							currCount = val;
						}

						currChildren[j].setAttribute('value', currCount);
						currCount -= 1;
					}
				}
			}
		}

	}());

}