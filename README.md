# domy-element
 
Html or css selector into DOM elements. For use with [Browserify](http://browserify.org).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-element.png)](https://ci.testling.com/scottcorgan/domy-element)
 
## Install
 
```
npm install domy-element --save
```
 
## Usage
 
```js
var element = require('domy-element');

var el = element('#someId').one(); // single
var els = element('.item').all(); // multiple

var el = element('<div class="item"></div>').one();
var el = element(document.body).one();

// In context
var items = element('.parent').all('.items');
```
 
## Element

### element(data);

* `data` - a string, css selector, or DOM element
* * Example 1: `element('<div class="item"></div>').one()` - returns a DOM element with a class of *item*
* * Example 2: `element(document.body).one()` - returns the *body* DOM element
* * Example 3: `element('body').one()` - returns the *body* DOM element

## Instance Methods

### all([selector])

Returns an array of DOM elements

* `selector` - css selector. If used, `selector` will select all DOM elements within the context of the parent selector used in the `element()` method.

### one([selector])

Returns a single DOM element

* `selector` - css selector. If used, `selector` will select the first matching DOM elements within the context of the parent selector used in the `element()` method.

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```