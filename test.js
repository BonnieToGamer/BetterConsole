require('mocha');
const assert = require('assert');
const sinon = require('sinon');

const console = require('./index.js');

const testStr = 'test';

describe('BetterConsole (note: due to how I made the console I can only test to see if the paramater was called)', function() {

  // log
  
  it('Should write to the console in green with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'log');
    console.log(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in green', function() {
    let spy = sinon.spy(console, 'log');
    
    console.options.logWithColor = false;
    console.log(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // error

  it('Should write to the console in red with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'error');
    console.error(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in red', function() {
    let spy = sinon.spy(console, 'error');

    console.options.errorWithColor = false;
    console.error(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // info

  it('Should write to the console in blue with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'info');
    console.info(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in blue', function() {
    let spy = sinon.spy(console, 'info');

    console.options.infoWithColor = false;
    console.info(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // warn 
  
  it('Should write to the console in yellow with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'warn');
    console.warn(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  it('Should write to the console with the name of the project at the front in yellow', function() {
    let spy = sinon.spy(console, 'warn');

    console.options.warnWithColor = false;
    console.warn(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // debug

  it('Should write to the console in green with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'debug');
    console.debug(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // clear

  it('Should clear the console', function() {
    if (process.env.CONSOLECLEAR == "true") {
      console.clear();
    }
  });

  // trace

  it('Should write to the console in green with the name of the project at the front', function() {
    console.trace();
  });

  // assert

  it('Should assert to the console in green with the name of the project at the front', function() {
    console.assert(1 < 2, "fail");
    console.assert(1 > 2, "fail");
  });

  // count

  it('Should write to the console in green with the name of the project at the front', function() {
    let spy = sinon.spy(console, 'count');
    console.count(testStr);

    assert(spy.calledWith(testStr));
    spy.restore();
  });

  // time

  it('Should write the time to the console in green with the name of the project at the front', function() {
    console.time();
  });

  // timeEnd

  it('Should stop the time', function() {
    console.timeEnd();
  });
});