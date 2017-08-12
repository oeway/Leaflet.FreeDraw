module.exports = {
    entry: ['./src/FreeDraw.js'],
    output: {
        filename: './dist/leaflet-freedraw.web.js',
        libraryTarget: 'var'
    },
    externals: {
        leaflet: 'L'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/i
            }
        ]
    }
};
