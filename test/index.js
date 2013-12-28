var element = require('../index.js');
var test = require('tape');
var regular = require('regular');

test('gets one DOM element with a selector', function (t) {
  document.body.appendChild(element('<div class="parent"></div>').one());
  
  var parent = element('.parent').one();
  
  t.equal(parent.className, 'parent');
  t.end();
});

test('gets array of DOm elements with selector', function (t) {
  element('.parent')
    .one()
    .appendChild(element('<div class="item"></div><div class="item"></div>').one());
  
  var items = element('.item').all();
  
  t.equal(items.length, 2);
  t.end();
});

test('queries elements within a context', function (t) {
  document.body.appendChild(element('<div class="item"></div>').one());
  
  var items = element('.parent').all('.item');
  var item = element('.parent').one('.item');
  
  t.equal(items.length, 2);
  t.equal(item.className, 'item');
  t.end();
});

test('query within context where context is a dom element', function (t) {
  var parent = element('<div class="parent"><div class="item"></div></div>').one();
  var one = element(parent).one('.item');
  var all = element(parent).all('.item');
  
  t.equal(one.className, 'item');
  t.equal(all.length, 1);
  t.end();
});

test('turns string of html into a DOM element', function (t) {
  var domEl = element('<div class="new-element"></div>');
  
  t.equal(domEl.one().className, 'new-element');
  t.equal(domEl.all()[0].className, 'new-element');
  t.equal(domEl.one().nodeName, 'DIV');
  t.end();
});

test('returns null if invalid selector is passed', function (t) {
  var el = element('<invalid').one();
  var els = element('<invalid').all();
  
  t.equal(el, null);
  t.deepEqual(els, [null]);
  t.end();
});

test('returns the DOM element if DOM element is passed in', function (t) {
  var el = document.body;
  
  t.deepEqual(element(el).one(), document.body);
  t.deepEqual(element(el).all()[0], document.body);
  t.end();
});

test('creates wrapper object around element', function (t) {
  var wrappedEl = element('.parent').wrap({
    method1: function () {}
  });
  
  t.deepEqual(wrappedEl.element.one(), element('.parent').one());
  t.ok(wrappedEl.method1);
  t.end();
});

test('element wrapper works with domified string', function (t) {
  var wrappedEl = element('<div class="parent"></div>').wrap({
    method1: function () {}
  });
  
  t.equal(wrappedEl.element.one().className, 'parent');
  t.end();
});
















// test('creates wrapper object around element', function (t) {
//   var wrapped = element.wrap('<div><span class="child"></span></div>', {
//     getFirstChildClassName: function () {
//       return this.element.firstChild.className;
//     }
//   });
  
//   t.ok(wrapped.getFirstChildClassName);
//   t.equal(wrapped.getFirstChildClassName(), 'child');
//   t.end();
// });