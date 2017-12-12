import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;
const newSpy = chai.spy;

import Stance from './index';

describe('Stance', () => {
  it('should have good initial value', () => {
    const stance = new Stance(['a', 'b']);
    expect(stance.value).to.equal('a');
  });

  it('should have good initial value (2)', () => {
    const stance = new Stance(['a', 'b']);
    expect(stance.is('a')).to.equal(true);
  });

  it('should have good initial value (3)', () => {
    const stance = new Stance(['a', 'b']);
    expect(stance.is('b')).to.equal(false);
  });

  it('should handle to(newValue) (1)', () => {
    const stance = new Stance(['a', 'b']);
    stance.to('b');
    expect(stance.value).to.equal('b');
  });

  it('should handle to(newValue) (2)', () => {
    const stance = new Stance(['a', 'b']);
    stance.to('b');
    expect(stance.is('b')).to.equal(true);
  });

  it('should handle to(newValue) (2)', () => {
    const stance = new Stance(['a', 'b']);
    stance.to('b');
    expect(stance.is('a')).to.equal(false);
  });

  it('should throw error for to(badValue)', () => {
    const stance = new Stance(['a', 'b']);
    const fn = () => stance.to('c');
    expect(fn).to.throw(Error);
  });
});
