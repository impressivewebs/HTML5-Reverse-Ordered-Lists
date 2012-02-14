if (!('reversed' in document.createElement('ol'))) (function () {

  // run the code on each ordered list with a 'reversed' attribute.
  var lists = document.getElementsByTagName('ol'),
      length = lists.length,
      i,
      j,
      childrenLength = 0,
      child = null
      currCount = null,
      currChildren = null;

  for (i = 0; i < length; i++) {
    child = lists[i];

    if (child.getAttribute('reversed') !== null) {
      currChildren = child.getElementsByTagName('li');
      childrenLength = currChildren.length;
      // check the existence of the start attribute
      if (child.getAttribute('start') !== null) {
        // if it exists, convert it to an integer; also ensures even decimal values work
        currCount = +child.start;
        
        // If it wasn't a number, it will return 'NaN'; if so, use the number of list items instead
        if (isNaN(currCount)) {
          currCount = currChildren.length;
        }
      
      // do this if the start attribute is not present
      // the first number is derived from the number of list items
      } else {
        currCount = currChildren.length;
      }
      
      // go through each list item, adding the 'value' attribute plus currCount number
      // then subract one from currCount so we're ready for the next one
      for (j = 0; j < childrenLength; j++) {
        currChildren[j].setAttribute('value', currCount);
        currCount -= 1;
      }
    }    
  }
})();