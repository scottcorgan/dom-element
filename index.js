var domify = require('domify');
var regular = require('regular');

var element = function (data, options) {
  options = options || {};
  
  var type = whichType(data);
  var el = element[type](data, options.multiple);
  
  return el;
};

element.wrap = function (data, _prototype_) {
  var F = function (_data) {
    this.element = element(_data);
  }
  
  F.prototype = _prototype_;
  
  return new F(data);
};

element.all = function (data) {
  return element(data, {
    multiple: true
  });
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