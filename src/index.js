const button = document.createElement('button');
button.innerText = 'Click me File Splitter - call JS';
button.onclick = () => {
	System.import('./image_viewer').then(module => { // System.import is what triggers webpack to add it's code splitting code & action it
		console.log(module);
		module.default(); // call the default export from image viewer
	});
	// System is a global variable inside of JS
	// System.import is special ES2015 import to reach out to the server again
};

document.body.appendChild(button);