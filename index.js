require('colors');
const assert = require('assert');
const name = require('project-name');

const projectName = `[${name()}]`.toLowerCase();

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
   * The `console.assert()` method writes an error message with the project name as a prefix to the console if the assertion is false. If the assertion is true, nothing happens.
   * 
   * `console.options.errorWithColor` controls wheter the output should be colored or not
   * 
   * Sources: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#console_console_assert_value_message)
   * 
   * @method
   * @param {any} value The value tested for being truthy.
   * @param {any} [message] All arguments besides value are used as error message.
   */
  assert: function(value, ...message) {
    try {
      assert.ok(value, ...message);
    } catch (err) {
      this.error(err);
    }
  },

  /**
   * The `console.clear()` method clears the console if the environment allows it.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/clear)
   * @method
   */
  clear: function() {
    process.stdout.write('\u001b[2J\u001B[0;0f');
  },

  /**
   * The console.count() method logs the number of times that this particular call to count() has been called with the name of the project as prefix.
   * 
   * `console.options.infoWithColor` controls wheter the output should be colored or not 
   * 
   * Sources: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/count)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#console_console_count_label)
   * 
   * @method
   * @param {string} [label] The display label for the counter. Default: 'default'.
   */
  count: function(label = 'defualt') {
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.infoColor);
    }

    process.stdout.write(projectName[this.options.infoColor] + ' ');
    console.count.apply(this, arguments);
  },

  /**
   * The `console.countReset()` method resets counter used with`console.count()`.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/countReset)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#console_console_countreset_label)
   * 
   * `console.options.infoWithColor` controls wheter the output should be colored or not 
   * 
   * @method
   * @param {string} [label] The display label for the counter. Default: 'default'.
   */
  countReset: function(label = 'default') {
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.infoColor);
    }

    process.stdout.write(projectName[this.options.infoColor] + ' ');
    console.countReset.apply(this, arguments);
  },

  /**
   * The `console.debug()` function is an alias for `console.log()`.
   * 
   * `console.options.logWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/debug)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#console_console_debug_data_args)
   * 
   * @method
   * @param {any} data
   * @param {any} [args]
   */
  debug: function(data, ...args) {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.debug.apply(this, arguments);
  },

  /**
   * The method `console.dir()` displays an interactive list of the properties of the specified JavaScript object. 
   * The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
   * 
   * In other words, `console.dir()` is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
   * 
   * `console.options.logWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/dir)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoledirobj-options)
   * 
   * @method
   * @param {any} obj
   * @param {InspectOptions} [options]
   */
  dir: function(obj, options = undefined) {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }
    process.stdout.write(projectName[this.options.logColor] + ' ');
    console.dir.apply(this, arguments);
  },

  /**
   * The `console.dirxml()` method displays an interactive tree of the descendant elements of the specified XML/HTML element. 
   *    
   * If it is not possible to display as an element the JavaScript Object view is shown instead. 
   * The output is presented as a hierarchical listing of expandable nodes that let you see the contents of child nodes.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/dirxml)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoledirxmldata)
   * 
   * @method
   * @param {any} data
   */
  dirxml: function(...data) {
    console.log(projectName[this.options.logColor] + ':');
    console.dir.apply(this, arguments);
  },

   /**
   * The `console.error()` method outputs an error message to the console.
   * 
   * `console.options.errorWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/error)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoleerrordata-args)
   * 
   * @method
   * @param {any} [data]
   * @param {any} [args]
   */
  error: function(data = '', ...args) {
    if (this.options.errorWithColor === true) {
      arguments = colorLog(arguments, this.options.errorColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.errorColor]);

    console.error.apply(this, arguments);
  },

  /**
   * The `console.group()` method creates a new inline group in the console log. 
   * This indents following console messages by an additional level, until `console.groupEnd()` is called.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/group)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consolegrouplabel)
   * 
   * @method
   * @param {any} [label]
   */
  group: function(...label) {
    console.group.apply(this, arguments);
  },

  /**
   * An alias for `console.group()`.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consolegroupcollapsed)
   * @method
   */
  groupCollapsed: function() {
    console.groupCollapsed.apply(this, arguments);
  },

  /**
   * The `console.groupEnd()` method exits the current inline group in the console. 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/groupEnd)
   * @method
   */
  groupEnd: function() {
    console.groupEnd.apply(this, arguments);
  },

  /**
   * The `console.info()` method outputs an informational message to the console.
   * 
   * `console.options.infoWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/info)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoleinfodata-args)
   * 
   * @method
   * @param {any} [data]
   * @param {any} [args]
   */
  info: function(data = '', ...args) {
    if (this.options.infoWithColor === true) {
      arguments = colorLog(arguments, this.options.infoColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.infoColor]);

    console.info.apply(this, arguments);
  },

  /**
   * The `console.log()` method outputs a message to the web console. 
   * The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
   * 
   * `console.options.logWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
   * 
   * @method
   * @param {any} [data]
   * @param {any} [args]
   */
  log: function(data = '', ...args) {
    if (this.options.logWithColor === true) {
      arguments = colorLog(arguments, this.options.logColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.logColor]);

    console.log.apply(this, arguments);
  },

  /**
   * The `console.table()` method displays tabular data as a table.
   * 
   * This function takes one mandatory argument data, which must be an array or an object, and one additional optional parameter columns.
   * 
   * It logs data as a table. Each element in the array (or enumerable property if data is an object) will be a row in the table.
   * 
   * The first column in the table will be labeled (index).
   * If data is an array, then its values will be the array indices. If data is an object, 
   * then its values will be the property names.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/table)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoletabletabulardata-properties)
   * 
   * @method
   * @param {any} tabularData
   * @param {readonly string[]} [properties] Alternative properties for constructing the table
   */
  table: function(tabularData, properties = undefined) {
    console.log(projectName[this.options.logColor] + ':');
    console.table.apply(this, arguments);
  },

  /**
   * The `console.time()` method starts a timer you can use to track how long an operation takes. 
   * You give each timer a unique name, and may have up to 10,000 timers running on a given console. 
   * When you call `console.timeEnd()` with the same name, the console will output the time, in milliseconds, that elapsed since the timer was started.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/time)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoletimelabel)
   * 
   * @method
   * @method
   * @param {string} [label] Default: 'default'
   */
  time: function(label = 'default'){
    console.time.apply(this, arguments);
  },

  /**
   * The `console.timeEnd()` stops a timer that was previously started by calling `console.time()`.
   * 
   * `console.options.infoWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoletimeendlabel)
   * 
   * @method
   * @param {string} [label] Default: 'defualt'
   */
  timeEnd: function(label = 'default'){
    process.stdout.write(projectName[this.options.logColor] + ' ');
    console.timeEnd.apply(this, arguments);
  },

  /**
   * The `console.timeLog()` method logs the current value of a timer that was previously started by calling `console.time()` to the console.
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/timeLog)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoletimeloglabel-data)
   * 
   * @method
   * @param {string} [label] Default: 'default'
   * @param {any} [data]
   */
  timeLog: function(label = 'default', ...data) {
    process.stdout.write(projectName[this.options.logColor] + ' ');
    console.timeLog.apply(this, arguments);
  },

  /**
   * The `console.trace()` method outputs a stack trace to the console.
   * 
   * `console.options.logWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/trace)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consoletracemessage-args)
   * 
   * @method
   * @type {Function}
   * @param {any} [message]
   * @param {any} [args]
   */
  trace: function(message = '', ...args) {
    process.stdout.write(projectName[this.options.logColor] + ': ');
    console.trace(message, ...args);
  },

   /**
   * The `console.trace()` method outputs a stack trace to the console.
   * 
   * `console.options.warnWithColor` controls wheter the output should be colored or not 
   * 
   * Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console/warn)
   * and [Node.js Docs](https://nodejs.org/docs/latest-v16.x/api/console.html#consolewarndata-args)
   * 
   * @method
   * @param {any} [data]
   * @param {any} [args]
   */
  warn: function(data = '', ...args) {
    if (this.options.warnWithColor === true) {
      arguments = colorLog(arguments, this.options.warnColor);
    }

    Array.prototype.unshift.call(arguments, projectName[this.options.warnColor]);

    console.warn.apply(this, arguments);
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