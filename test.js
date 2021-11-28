require('mocha');
const assert = require('assert');
const { info } = require('console');
const sinon = require('sinon');

require('./index.js');

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
    
    console.log(testStr, false);

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

    console.error(testStr, false);

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

    console.info(testStr, false);

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

    console.warn(testStr, false);

    assert(spy.calledWith(testStr));
    spy.restore();

    console.log('log');
    console.log('log', false);
    console.error('error');
    console.error('error', false);
    console.info('info');
    console.info('info', false);
    console.warn('warn');
    console.warn('warn', false);
  });
});