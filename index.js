var domify = require('domify');
var regular = require('regular');

var element = function (data, multiple) {
  var type = whichType(data);
  return element[type](data, multiple);
}

element.all = function (data) {
  return element(data, true);
};

element.dom = function (el) {
  return el;
};

element.html = function (html) {
  return domify(html);
};

element.selector = function (selector, multiple) {
  var _element = null;
  var domQuery = (multiple) ? document.querySelectorAll : document.querySelector;
  
  try { _element = domQuery.call(document, selector); }
  catch(e) {}
  
  return _element;
};

function whichType (data) {
  if (typeof data !== 'string') return 'dom';
  if (regular.html.test(data)) return 'html';
  return 'selector';
}

module.exports = element;