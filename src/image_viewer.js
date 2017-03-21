// note that you may well need to 'brew install libpng' in order to run the image imports in webpack
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css'; // this is ES2015 import. It is just importing. No need to assign it to anything.

const image = document.createElement('img');
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);