var domify = require('domify');
var regular = require('regular');

var element = module.exports = function (selector) {
  return new Element(selector);
};

var Element = function (selector) {
  this._type = whichType(selector);
  this._selector = selector;
  this._context = document;
};

Element.prototype.one = function (contextSelector) {
  if (contextSelector) this._setSelectorContext(contextSelector);
  
  return this._queryByType('querySelector');
};

Element.prototype.all = function (contextSelector) {
  if (contextSelector) this._setSelectorContext(contextSelector);
  
  var els = this._queryByType('querySelectorAll');
  
  // Make sure it's always an array
  return (els && els.length)
    ? [].slice.call(els, 0)
    : [els];
};

Element.prototype._queryByType = function (queryMethod) {
  if (this._type === 'dom') return this._selector;
  if (this._type === 'html') return domify(this._selector);
  if (this._type === 'selector') return this._query(queryMethod);
  
  return null;
};

Element.prototype._query = function (queryMethod) {
  var _element = null;
  
  try{
    _element = this._context[queryMethod].call(this._context, this._selector);
  } 
  catch(e) {}
  
  return _element;
};

Element.prototype._setSelectorContext = function (newSelector) {
  
  // Reset context, selector, and type for parent to child queries
  if (this._type !== 'selector') {
    this._context = this._selector;
    this._selector = newSelector;
    this._type = whichType(newSelector);
  }
  else{
    this._selector = this._selector + ' ' + newSelector;
  }
  
  return this;
};

Element.prototype.wrap = function (_prototype_) {
  var F = function (_data) {
    this.element = element(_data);
  }
  
  F.prototype = _prototype_;
  
  return new F(this._selector);
};

function whichType (data) {
  if (typeof data !== 'string') return 'dom';
  if (regular.html.test(data)) return 'html';
  return 'selector';
}