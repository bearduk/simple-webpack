import small from '../assets/small.jpg';
import '../styles/image_viewer.css'; // this is ES2015 import. It is just importing. No need to assign it to anything.
import twelveSq from '../assets/big.jpg';


export default () => {

	const image = document.createElement('img');
	image.src = small; // this works as it's in the bundle
	document.body.appendChild(image);

	console.log('test');

	const twelveImage = document.createElement('img');
	twelveImage.src = twelveSq;
	document.body.appendChild(twelveImage);
};


/* // orig multiple

// note that you may well need to 'brew install libpng' in order to run the image imports in webpack
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
// import twelve from '../assets/1200.jpg';
import '../styles/image_viewer.css'; // this is ES2015 import. It is just importing. No need to assign it to anything.

const image = document.createElement('img');
// image.src = "http://lorempixel.com/400/400";
image.src = small; // this works as it's in the bundle

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big; // this needs the publicPath setting in webpack.config.js in order to work.


document.body.appendChild(bigImage);


import twelveSq from '../assets/1200.jpg';
const twelveImage = document.createElement('img');
twelveImage.src = twelveSq;


console.log('bigImage: ' + bigImage);
console.log(bigImage);
console.log('twelveImage: ' + twelveImage);
console.log(twelveImage);
document.body.appendChild(twelveImage);





*/ // . orig multiple