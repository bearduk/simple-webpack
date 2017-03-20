// CommonJS
// const sum = require('./sum');

// ES2015 using import. Babel takes care of this new type of import/export
import sum from './sum'; // standard to import code
import './image_viewer'; // note that image_viewer just runs, so you don't need to import with xyz from whatever


const total = sum(4,3);
console.log(total);