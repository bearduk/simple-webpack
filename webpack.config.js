const path = require('path'); // path is part of node itself

const config = {
    entry: './src/index.js', // relative
    output: {
        path: path.resolve(__dirname, 'build'), // requires absolute path. resolve makes sure it works on all operating systems. dirname means from the folder name this file is in
        filename: 'bundle.js'
    },
    // end bare minimum setup
    module: { // webpack 2 uses modules, and rule. loader was old webpack 1
        rules: [ // an array of rules
            { // first rule is an object
                use: 'babel-loader',
                test: /\.js$/ // regex - ends with .js
            },
            { // new rule
                use: ['style-loader', 'css-loader'], // applied right to left
                test: /\.css$/
            }
        ]
    }
};

module.exports = config;