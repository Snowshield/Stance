// EXAMPLE
// import Stance from 'app/helpers/newStance';
//
// const stance = new Stance(['a', 'b']);
// console.log(stance.is('a')); // true
// console.log(stance.is('b')); // false
//
// stance.to('b');
// console.log(stance.is('a')); // false
// console.log(stance.is('b')); // true

export default class Stance {
  constructor(values) {
    this.index = 0;
    this.values = values;
  }
  get value() {
    return this.values[this.index];
  }
  is(value) {
    return value === this.value;
  }
  to(value) {
    const newIndex = this.values.indexOf(value);

    if (newIndex === -1) {
      throw new Error(`Stance doesn't have value ${value}`);
    }
    this.index = newIndex;
  }
}
