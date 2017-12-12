# Stance
Update textarea height to its content with lines number customization.

#### GitHub: [link](https://github.com/Snowshield/Stance)
#### NPM: [link](https://www.npmjs.com/package/stance)

#### Install via NPM

```
npm install --save stance
```

#### Usage

```javascript
import Stance from 'stance';

const stance = new Stance(['a', 'b']);
console.log(stance.is('a')); // true
console.log(stance.is('b')); // false

stance.to('b');
console.log(stance.is('a')); // false
console.log(stance.is('b')); // true
```

#### License: [MIT](http://www.opensource.org/licenses/mit-license.php)
