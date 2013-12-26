var element = require('../index.js');
var test = require('tape');

test('turns html string info dom element', function (t) {
  var el = element('<div class="item"></div>');
  
  t.equal(el.nodeName, 'DIV');
  t.equal(el.className, 'item');
  t.end();
});

test('turns selector string into selected DOM element', function (t) {
  document.body.appendChild(element("<div class='parent'></div>"));
  
  t.deepEqual(element('.parent')[0], document.querySelectorAll('.parent')[0]);
  t.end();
});

test('returns the DOM element if DOM element is passed in', function (t) {
  var el = document.body;
  
  t.deepEqual(element(el), document.body);
  t.end();
});
