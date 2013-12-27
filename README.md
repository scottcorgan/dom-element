# domy-element
 
Html or css selector into DOM elements. For use with [Browserify](http://browserify.org).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-element.png)](https://ci.testling.com/scottcorgan/domy-element)

(Uses document.querySelectorAll under the hood)
 
## Install
 
```
npm install domy-element --save
```
 
## Usage
 
```js
var element = require('domy-element');

var el = element('<div class="item"></div>');
var el = element('#someId');
var el = element(document.body);

// Multiple
var els = element.all('.selector')
// or
var els = element('.selector', true);
```
 
## Methods

### element(data[, multiple]);

* `data` - a string, css selector, or DOM element
* `multiple` - pass `true` for query to return multiple DOM elements

### element.all(data)

Helper method which does the same thing as `element('.selector', true)`

* `data` - css selector

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```