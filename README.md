# [HTML5 Reverse Ordered Lists (Polyfill)](http://www.impressivewebs.com/reverse-ordered-lists-html5/)

A polyfill that adds support for reverse ordered lists. See:

http://www.impressivewebs.com/reverse-ordered-lists-html5

http://dev.w3.org/html5/spec/Overview.html#the-ol-element

Just include the script in any page (at the end or after the DOM has loaded) and it will automagically make the 'reversed' attribute work on ordered lists (the attribute is only meant for ordered lists).

It also takes into consideration the optional 'start' attribute. Fortunately, 'start' has full support in every browser, so no need for a polyfill for that if you're not using 'reversed'.

The script basically uses the cross-browser 'value' attribute on list items that was deprecated in HTML4 but now valid in HTML5.

Special thanks to <a href="http://remysharp.com/">Remy Sharp</a> for removing the polyfill's dependency on jQuery.

More thanks to <a href="http://jeffreybarke.net/">Jeffrey Barke</a> who pointed out problems with manual value attributes already existing in the HTML, and the fact that the raw JS version was not handling nested lists properly.

If you want a version that uses jQuery, you can grab the code from <a href="http://jsfiddle.net/ImpressiveWebs/h4JcL/51/">this jsFiddle</a>.
