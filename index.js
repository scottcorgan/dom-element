var domify = require('domify');

var element = function (el) {
  var domEl = el;
  
  if (typeof el === 'string') {
    try {
      domEl = document.querySelectorAll(el);
    }
    catch(e) {
      domEl = domify(el);
    }
  }
  
  return domEl;
}

module.exports = element;