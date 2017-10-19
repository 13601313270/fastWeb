var webpack=require('webpack');
var path=require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app:[
            path.resolve(__dirname, "./app/main.js")
        ],
    },
    output:{
        path: __dirname + "/public",
        filename: "[name].js",
    },
    module:{
        rules:[
            {test:/\.css$/,loader:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
    ]
}

