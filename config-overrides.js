const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            stream: false,
            zlib: false,
            path: false,
            os: false,
            crypto: false,
            https: false,
            http: false,
            url: false,
            net: false,
            tls: false,
            fs: false,
        },
        
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};
