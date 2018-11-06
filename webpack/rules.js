const {
    serverConfig: { NODE_ENV, isDevelopment, isProduction }
} = require('./config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'css/[name].css',
    allChunks: true
});

const rules = [
    {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'image/[name].[hash].[ext]'
                }
            }
        ]
    }
];

const rules4Prod = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: extractCSS.extract({
                    fallback: 'vue-style-loader',
                    use: ['css-loader']
                }),
                sass: extractCSS.extract({
                    fallback: 'vue-style-loader',
                    use: ['sass-loader', 'css-loader']
                }),
                js: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        }
    },
    {
        test: /\.css$/,
        use: extractCSS.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {}
                }
            ]
        })
    },
    {
        test: /\.scss$/,
        use: extractCSS.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    },
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
].concat(rules);

const rules4Dev = [
    {
        test: /\.vue$/,
        use: 'vue-loader'
    },
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
    },
    {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
    }
].concat(rules);

module.exports = { extractCSS, rules: isDevelopment ? rules4Dev : rules4Prod };
