var domify = require('domify');
var regular = require('regular');

var element = function (data, options) {
  var type = whichType(data);
  var el = element[type](data, options || {});
  
  return el;
};

element.wrap = function (data, _prototype_) {
  var F = function (_data) {
    this.element = element(_data);
  }
  
  F.prototype = _prototype_;
  
  return new F(data);
};

element.all = function (data, options) {
  if (!options) options = {};
  options.multiple = true;
  
  return element(data, options);
};

element.dom = function (el) {
  return el;
};

element.html = function (html) {
  return domify(html);
};

element.selector = function (selector, options) {
  var _element = null;
  var context = (options.context) ? element(options.context) : document;
  var domQuery = (options.multiple) ? context.querySelectorAll : context.querySelector;
  
  try { _element = domQuery.call(context, selector); }
  catch(e) {}
  
  return _element;
};

function whichType (data) {
  if (typeof data !== 'string') return 'dom';
  if (regular.html.test(data)) return 'html';
  return 'selector';
}

module.exports = element;