# evaluate-value [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Return a value or an evaluated function (with arguments).


## Installation

[Node.js](http://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install evaluate-value
```


## Usage

```js
const evaluateValue = require('evaluate-value');

evaluateValue(true);
// true

evaluateValue(function() {
	return true
});
// true

evaluateValue(function(arg1, arg2) {
	return arg1 === arg2;
}, true, false);
// false
```


[npm-image]: https://img.shields.io/npm/v/evaluate-value.svg
[npm-url]: https://npmjs.org/package/evaluate-value
[travis-image]: https://img.shields.io/travis/stevenvachon/evaluate-value.svg
[travis-url]: https://travis-ci.org/stevenvachon/evaluate-value
