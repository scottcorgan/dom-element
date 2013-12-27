var element = require('../index.js');
var test = require('tape');
var regular = require('regular');

test('turns html string info dom element', function (t) {
  var el = element('<div class="item"></div>');
  
  t.equal(el.nodeName, 'DIV');
  t.equal(el.className, 'item');
  t.end();
});

test('turns selector string into selected DOM element', function (t) {
  document.body.appendChild(element("<div class='parent'></div>"));
  
  t.deepEqual(element('.parent'), document.querySelector('.parent'));
  t.end();
});

test('returns the DOM element if DOM element is passed in', function (t) {
  var el = document.body;
  
  t.deepEqual(element(el), document.body);
  t.end();
});

test('returns null if invalid selector is passed', function (t) {
  var el = element('<invalid');
  
  t.equal(el, null);
  t.end();
});

test('returns multiple DOM elements if there are multiple', function (t) {
  document.body.appendChild(element("<div class='parent'></div>"));
  
  var els = element('.parent', true);
  
  t.equal(els.length, 2);
  t.end();
});

test('sugar for selecting multiple', function (t) {
  var els = element.all('.parent');
  
  t.equal(els.length, 2);
  t.end();
});