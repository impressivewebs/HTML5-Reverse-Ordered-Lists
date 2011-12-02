# [HTML5 Reverse Ordered Lists (Polyfill)](http://www.impressivewebs.com/html5-reverse-ordered-lists/)

A polyfill that adds support for reverse ordered lists. See:

http://www.impressivewebs.com/reverse-ordered-lists-html5

http://dev.w3.org/html5/spec/Overview.html#the-ol-element

Just include the script in any page along with the jQuery library and it will automagically make the 'reversed' attribute work on ordered lists (the attribute is only meant for ordered lists).

It also takes into consideration the optional 'start' attribute. Fortunately, 'start' has full support in every browser, so no need for a polyfill for that if you're not using 'reversed'.

The script basically uses the cross-browser 'value' attribute on list items that was deprecated in HTML4 but now valid in HTML5.