const glob = require('glob');
const { resolve } = require('path');
const {
    pathConfig: { src, prepack }
} = require('./config');

const entry = glob
    .sync(resolve(src, './pages/**/index.vue'))
    .reduce((prev, cur) => {
        let entryKey = cur.split('/').slice(-2, -1)[0];
        let entryValue = resolve(prepack, `${entryKey}.js`);

        prev[entryKey] = entryValue;
        return prev;
    }, {});

module.exports = { entry };
