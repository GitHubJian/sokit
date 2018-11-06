const webpackCompiler = require('./compiler');
const { webpackConfig } = require('./webpack.dll.config');

const dllBuild = async () => {
    if (Object.keys(webpackConfig.entry).length > 0) {
        await webpackCompiler(webpackConfig);
    }

    console.log(`\n🌍 => DLL 打包完成\n`);
};

module.exports = dllBuild;
