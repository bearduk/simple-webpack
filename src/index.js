// CommonJS
// const sum = require('./sum');

// ES2015 using import. Babel takes care of this new type of import/export
import sum from './sum';

const total = sum(4,3);
console.log(total);