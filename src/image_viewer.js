// note that you may well need to 'brew install libpng' in order to run the image imports in webpack
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import twelve from '../assets/1200.jpg';
import '../styles/image_viewer.css'; // this is ES2015 import. It is just importing. No need to assign it to anything.

const image = document.createElement('img');
// image.src = "http://lorempixel.com/400/400";
image.src = small; // this works as it's in the bundle

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big; // this needs the publicPath setting in webpack.config.js in order to work.

console.log(bigImage);
document.body.appendChild(bigImage);


const twelveImage = document.createElement('img');
// testing inline url-loader setting as per: https://github.com/webpack-contrib/url-loader
const cbtestUrlLoader = require("url-loader?limit=10!../assets/1200.jpg");
twelveImage.src = cbtestUrlLoader;
// => DataUrl if "file.png" is smaller than xkb

document.body.appendChild(twelveImage);
console.log('cbtestUrlLoader: ' + cbtestUrlLoader);
console.log(twelveImage);