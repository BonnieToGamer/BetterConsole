// require('colors'); 
import { default as chalk } from 'chalk';
import name from 'project-name';

const projectName = `[${name()}]`.toLowerCase();

export const options = {
  logColor: true,
  errorColor: true,
  infoColor: true,
  warnColor: true
};
export function log() {
  if (this.options.logColor === false) {
    Array.prototype.pop.call(arguments);
    for (let i = 0; i < arguments.length; i++) {
      try {
        chalk.green(arguments[i] = arguments[i].toString());
      } catch { }
    }
  }
  console.log.apply(this, arguments);
}

// function colorLog(color) {
//   process.stdout.write("test"[color] + "\n")
// } 


// colors = { red: red }


colorLog(colors.red);

// var oldConsole = console.log;

// console.log = function() {
//   if (arguments[arguments.length - 1] === false) { }
//   else {
//     for(let i = 0; i < arguments.length; i++) {
//       try {
//         arguments[i] = arguments[i].toString().green;
//       } catch { }
//     }
//   }
//   if (arguments.length > 1) Array.prototype.pop.call(arguments);

//   Array.prototype.unshift.call(arguments, projectName.green);

//   oldConsole.apply(this, arguments);
// }

// console.error = function() {
//   if (arguments[arguments.length - 1] === false) { }
//   else {
//     for(let i = 0; i < arguments.length; i++) {
//       try {
//         arguments[i] = arguments[i].toString().red;
//       } catch { }
//     }
//   }
//   if (arguments.length > 1) Array.prototype.pop.call(arguments);

//   Array.prototype.unshift.call(arguments, projectName.red);

//   oldConsole.apply(this, arguments);
// }

// console.info = function() {
//   if (arguments[arguments.length - 1] === false) { }
//   else {
//     for(let i = 0; i < arguments.length; i++) {
//       try {
//         arguments[i] = arguments[i].toString().blue;
//       } catch { }
//     }
//   }
//   if (arguments.length > 1) Array.prototype.pop.call(arguments);

//   Array.prototype.unshift.call(arguments, projectName.blue);

//   oldConsole.apply(this, arguments);
// }

// console.warn = function() {
//   if (arguments[arguments.length - 1] === false) { }
//   else {
//     for(let i = 0; i < arguments.length; i++) {
//       try {
//         arguments[i] = arguments[i].toString().yellow;
//       } catch { }
//     }
//   }
//   if (arguments.length > 1) Array.prototype.pop.call(arguments);

//   Array.prototype.unshift.call(arguments, projectName.yellow);

//   oldConsole.apply(this, arguments);
// }

// module.exports = console;