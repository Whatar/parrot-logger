import * as logger from '../src/index';
import { assert } from 'chai';
import { sep } from 'path';
import { spy } from 'sinon';

describe('Logger Tests', () => {
  let consoleSpy: any;

  before(() => {
    process.env.NODE_ENV = 'development';
  });

  beforeEach(() => {
    consoleSpy = spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log info message', () => {
    logger.info('This is an info message');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/❔.*This is an info message/));
  });

  it('should log warn message', () => {
    logger.warn('This is a warning message');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/⚠️.*This is a warning message/));
  });

  it('should log error message', () => {
    logger.err('This is an error message');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/❌.*This is an error message/));
  });

  it('should log success message', () => {
    logger.ok('This is a success message');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/✅.*This is a success message/));
  });

  it('should log message', () => {
    logger.log('This is a message');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/.*This is a message/));
  });

  it('should log multiple info messages', () => {
    logger.info('Info message 1', 'Info message 2');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/❔.*Info message 1.*Info message 2/));
  });

  it('should log multiple warn messages', () => {
    logger.warn('Warning message 1', 'Warning message 2');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/⚠️.*Warning message 1.*Warning message 2/));
  });

  it('should log multiple error messages', () => {
    logger.err('Error message 1', 'Error message 2');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/❌.*Error message 1.*Error message 2/));
  });

  it('should log multiple success messages', () => {
    logger.ok('Success message 1', 'Success message 2');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/✅.*Success message 1.*Success message 2/));
  });

  it('should log multiple messages', () => {
    logger.log('Message 1', 'Message 2');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/.*Message 1.*Message 2/));
  });

  it('should log multiple messages with different types', () => {
    logger.log('String', 123, true, { key: 'value' }, ['array']);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/.*String.*123.*true.*{ key: 'value' }/));
  });

  it('should not log info message', () => {
    const logger2 = require('../src/index');
    logger2.configure({ hideLog: true });

    logger2.ok('This is an info message');
    assert(consoleSpy.notCalled);
  });

  it('should log warn message with options', () => {
    const logger2 = require('../src/index');
    logger2.configure({ hideLog: false, emoji: false, separator: '- ' });

    logger2.info('This is a info message', 'with options');
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithMatch(/This is a info message-.*with options/));
  });
});
