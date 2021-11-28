const colors = require('colors');
const name = require('project-name');

const projectName = `[${name()}]`.toLowerCase();

var oldConsole = console.log;

console.log = function() {
  if (arguments[1] == true || arguments[1] == null) arguments[0] = arguments[0].green;
  if (arguments.length == 2) Array.prototype.pop.call(arguments);

  Array.prototype.unshift.call(arguments, projectName.green);

  oldConsole.apply(this, arguments);
}

console.error = function() {
  if (arguments[1] == true || arguments[1] == null) arguments[0] = arguments[0].red;
  if (arguments.length == 2) Array.prototype.pop.call(arguments);

  Array.prototype.unshift.call(arguments, projectName.red);

  oldConsole.apply(this, arguments);
}

console.info = function() {
  if (arguments[1] == true || arguments[1] == null) arguments[0] = arguments[0].blue;
  if (arguments.length == 2) Array.prototype.pop.call(arguments);

  Array.prototype.unshift.call(arguments, projectName.blue);

  oldConsole.apply(this, arguments);
}

console.warn = function() {
  if (arguments[1] == true || arguments[1] == null) arguments[0] = arguments[0].yellow;
  if (arguments.length == 2) Array.prototype.pop.call(arguments);

  Array.prototype.unshift.call(arguments, projectName.yellow);

  oldConsole.apply(this, arguments);
}

module.exports = console;