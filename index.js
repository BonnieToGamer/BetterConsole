require('colors');
const assert = require('assert');
const name = require('project-name');

// var counter = [];

const projectName = `[${name()}]`.toLowerCase();
console.log();
module.exports = {
  /**
   * Console options.
   */
  options: {
    /**
     * If true the entire line will be colored,
     * otherwise only the name will be colored.
     */
    logWithColor: true,
    /**
     * If true the entire line will be colored,
     * otherwise only the name will be colored.
     */
    errorWithColor: true,
    /**
     * If true the entire line will be colored,
     * otherwise only the name will be colored.
     */
    infoWithColor: true,
    /**
     * If true the entire line will be colored,
     * otherwise only the name will be colored.
     */
    warnWithColor: true,
    /**
     * A string reprecenting the color of the log function. 
     * Needs to be a color from the [colors](https://www.npmjs.com/package/colors#text-colors) package.
     */
    logColor: 'green',
    /**
     * A string reprecenting the color of the error function. 
     * Needs to be a color from the [colors](https://www.npmjs.com/package/colors#text-colors) package.
     */
    errorColor: 'red',
    /**
     * A string reprecenting the color of the info function. 
     * Needs to be a color from the [colors](https://www.npmjs.com/package/colors#text-colors) package.
     */
    infoColor: 'blue',
    /**
     * A string reprecenting the color of the warn function. 
     * Needs to be a color from the [colors](https://www.npmjs.com/package/colors#text-colors) package.
     */
    warnColor: 'yellow'
  },

  /**
   * Extends `console.log()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  log: function() {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.log.apply(this, arguments);
  },

  /**
   * Extends `console.error()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  error: function() {
    if (this.options.errorWithColor === true) {
      arguments = colorLog(arguments, this.options.errorColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.errorColor]);

    console.error.apply(this, arguments);
  },

  /**
   * Extends `console.info()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  info: function() {
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.infoColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.infoColor]);

    console.info.apply(this, arguments);
  },

  /**
   * Extends `console.warn()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  warn: function() {
    if (this.options.warnWithColor === true) {
      arguments = colorLog(arguments, this.options.warnColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.warnColor]);

    console.warn.apply(this, arguments);
  },

  /**
   * Extends `console.debug()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  debug: function() {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.debug.apply(this, arguments);
  },
  
  /**
   * Extends `console.dir()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  dir: function() {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.dir.apply(this, arguments);
  },

  /**
   * Extends `console.clear()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  clear: function() {
    process.stdout.write('\u001b[2J\u001B[0;0f');
  },

  /**
   * Extends `console.trace()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  trace: function() {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.trace.apply(this, arguments);
  },

  /**
   * Extends `console.assert()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  assert: function(assertion) {
    try {
      assert.ok(arguments[0], arguments[1]);
    } catch (err) {
      this.error(err);
    }
  },

  /**
   * Extends `console.count()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  count: function(toCount = 'defualt') {
    // let countString = toCount.toString();
    // if(!counter.hasOwnProperty(countString)) {
    //   counter[countString] = 0;
    // } else {
    //   counter[countString]++;
    // }

    // this.info(toCount + ': ' + counter[countString]);

    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.infoColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.infoColor]);
    console.count.apply(this, arguments);
  },

  /**
   * Extends `console.time()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  time: function(){
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);
    console.time.apply(this, arguments);
  },

  /**
   * Extends `console.timeEnd()`. it appends the name of the project
   * as a prefix and colors the text.
   */
  timeEnd: function(){
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);
    console.timeEnd.apply(this, arguments);
  },
}

function colorLog(args, color) {
  for (let i = 0; i < args.length; i++) {
    try {
      args[i] = args[i].toString()[color];
    } catch { }
  }

  return args;
}