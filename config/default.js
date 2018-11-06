const root = process.cwd();
const path = require('path');
const { NODE_ENV, PORT } = process.env;
const [isDevelopment, isProduction] = [
    NODE_ENV === 'development',
    NODE_ENV === 'production'
];

module.exports = {
    path: {
        src: path.resolve(root, 'src'),
        pages: path.resolve(root, 'src/pages'),
        global: path.resolve(root, 'src/global.js'),
        temp: path.resolve(root, '.temp'),
        dll: path.resolve(root, '.temp/dll'),
        template: path.resolve(root, 'webpack/template.ejs'),
        prepack: path.resolve(root, '.temp/prepack'),
        static: path.resolve(root, 'static'),
        nodeModules: path.resolve(root, 'node_modules'),
        dist: path.resolve(root, 'dist'),
        favicon: path.resolve(root, 'favicon.ico'),
        zoo: path.resolve(root, 'zoo')
    },
    project: {
        title: 'SoKit Test',
        dllEntry: []
    }
};
