# dom-element
 
html or css selector into DOM elements. For use with [Browserify](http://browserify.org).

[![browser support](https://ci.testling.com/scottcorgan/dom-element.png)](https://ci.testling.com/scottcorgan/domy-element)

(Uses document.querySelectorAll under the hood)
 
## Install
 
```
npm install dom-element --save
```
 
## Usage
 
```js
var element = require('dom-element');

var el = element('<div class="item"></div>');
var el = element('#someId');
var el = element(document.body);
```
 
## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```