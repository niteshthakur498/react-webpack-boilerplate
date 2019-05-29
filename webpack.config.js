const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : './src/index.js',
    output : {
        path: path.join(__dirname,'dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                      "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.html?$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
              test: /\.css/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                }
              ]
            },
            {
              test: /\.(png|svg|jpg|gif|jpeg)$/,
              use: [
                {
                  loader: 'file-loader'
                }
              ]
            },
            // {
            //   test : /\.scss/,
            //   load
            // }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: "./index.html"
        })
    ]
}
