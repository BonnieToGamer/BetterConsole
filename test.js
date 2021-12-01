require('mocha');
const assert = require('assert');
const sinon = require('sinon');

const evenBetterConsole = require('./index.js');

const testStr = 'test';

describe('BetterConsole (note: due to how I made the console I can only test to see if the paramater was called)', function() {
  console.log('the order of tests');

  // assert
  console.log('Assert');

  it('Should write an error in red with the name at the front', function() {
    evenBetterConsole.assert(1 < 2, 'fail1');
    evenBetterConsole.assert(1 > 2, 'fail2');
  });

  // clear
  console.log('Clear');

  it('Should clear the console', function() {
    if (process.env.CONSOLECLEAR == 'true') {
      evenBetterConsole.clear();
    }
  });

  // count
  console.log('Count')

  it('Should start a counter', function() {
    evenBetterConsole.count(testStr);
    evenBetterConsole.log(testStr);
    evenBetterConsole.count(testStr);
  });

  // countReset
  console.log('countReset');

  it('Should reset the counter', function() {
    evenBetterConsole.countReset(testStr);
  });

  // debug
  console.log('debug');
  
  it('Should write to the console in green with the name of the project at the front', function() {
    let spy = sinon.spy(evenBetterConsole, 'debug');
    evenBetterConsole.debug(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // dir
  console.log('dir');

  it('Should displays an interactive list of the properties of the specified JavaScript object', function() {
    evenBetterConsole.dir(testStr);
  })

  // dirxml
  console.log('dirxml');
  
  it('Should display an interactive tree of the descendant elements of the specified XML/HTML element', function() {
    evenBetterConsole.dirxml(testStr)
  });

  // error
  console.log('error');
  
  it('Should write to the console in red with the name of the project at the front', function() {
    let spy = sinon.spy(evenBetterConsole, 'error');
    evenBetterConsole.error(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in red', function() {
    let spy = sinon.spy(evenBetterConsole, 'error');

    evenBetterConsole.options.errorWithColor = false;
    evenBetterConsole.error(testStr);
    evenBetterConsole.options.errorWithColor = true;
    
    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // group, groupCollapsed, groupEnd
  console.log('group, groupCollapsed, groupEnd');

  it ('Should write test to the console then indent the console write test2 indent again and write test3 unindent write test4 then unindent and finally write test5', function() {
    evenBetterConsole.log('test');
    evenBetterConsole.group();
    evenBetterConsole.log('test2');
    evenBetterConsole.group();
    evenBetterConsole.log('test3');
    evenBetterConsole.groupEnd();
    evenBetterConsole.log('test4');
    evenBetterConsole.groupEnd();
    evenBetterConsole.log('test5');
  });

  // info
  console.log('info');

  it('Should write to the console in blue with the name of the project at the front', function() {
    let spy = sinon.spy(evenBetterConsole, 'info');
    evenBetterConsole.info(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in blue', function() {
    let spy = sinon.spy(evenBetterConsole, 'info');

    evenBetterConsole.options.infoWithColor = false;
    evenBetterConsole.info(testStr);
    evenBetterConsole.options.logWithColor = true;

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // log
  console.log('log');
  
  it('Should write to the console in green with the name of the project at the front', function() {
    let spy = sinon.spy(evenBetterConsole, 'log');
    evenBetterConsole.log(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in green', function() {
    let spy = sinon.spy(evenBetterConsole, 'log');
    
    evenBetterConsole.options.logWithColor = false;
    evenBetterConsole.log(testStr);
    evenBetterConsole.options.logWithColor = true;

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // table
  console.log('table');

  it('Should write a table to the console with the name of the project in green', function() {
    let arr = [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j', 'k', 'l']];

    evenBetterConsole.table(arr);
  });

  // time
  console.log('time');

  it('Should start a timer', function() {
    evenBetterConsole.time();
  });

  // timeLog
  console.log('timeLog');

  it('Should write the time to the console in green with the name of the project at the front', function() {
    evenBetterConsole.timeLog();
  }); 

  // timeEnd
  console.log('timeEnd');

  it('Should stop the time', function() {
    evenBetterConsole.timeEnd();
  });

  // trace
  console.log('trace');

  it('Should write to the console in green with the name of the project at the front', function() {
    evenBetterConsole.trace();
  });

  // warn 
  console.log('warn');
  
  it('Should write to the console in yellow with the name of the project at the front', function() {
    let spy = sinon.spy(evenBetterConsole, 'warn');
    evenBetterConsole.warn(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in yellow', function() {
    let spy = sinon.spy(evenBetterConsole, 'warn');

    evenBetterConsole.options.warnWithColor = false;
    evenBetterConsole.warn(testStr);
    evenBetterConsole.options.warnWithColor = true;

    assert(spy.calledWith(testStr));
    spy.restore();
  });
});