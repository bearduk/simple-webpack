const path = require('path'); // path is part of node itself
const ExtractTextPlugin =   require('extract-text-webpack-plugin');


const config = {
    entry: './src/index.js', // relative
    output: {
        path: path.resolve(__dirname, 'build'), // requires absolute path. resolve makes sure it works on all operating systems. dirname means from the folder name this file is in
        filename: 'bundle.js',
        publicPath: 'build/' // this is used by loaders if they need it. e.g. url-loader uses it when outputting images, it prepends the image name with this path
    },
    // end bare minimum setup
    module: { // webpack 2 uses modules, and rule. loader was old webpack 1
        rules: [ // an array of rules
            { // first rule is an object
                use: 'babel-loader',
                test: /\.js$/ // regex - ends with .js
            },
            { // new rule
                // use: ['style-loader', 'css-loader'], // applied right to left  /**** USE IS FOR inline styles */
                use: ExtractTextPlugin.extract({ // note that 'loader' is deprecated, but you may need it instead of 'use' in some places
                    use: 'css-loader' // specifies the loader to take the output/text from
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    // 'url-loader',    note that if you want options, and there are multiple loaders in the array, then you need to change this to an object as so...
                    {
                        loader: 'url-loader', // don't ask why, but this needs 'loader' rather than 'use'.
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader' // far right goes first, so image-webpack-loader followed by url-loader
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // specifies what to do with the output of the loaders specified above.
    ]
};

module.exports = config;