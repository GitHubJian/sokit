const {
    pathConfig: { src, prepack: prepackPath }
} = require('./config');

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const { writeFileSync } = require('fs');

const createContent = entry => {
    return [
        `import Vue from 'vue';`,
        `import entry from '${entry}';`,
        '',
        `export default new Vue({`,
        `    el: '#app',`,
        `    render: h => h(entry)`,
        `})`
    ].join('\n');
};

const prepack = async () => {
    return glob
        .sync(path.resolve(src, './pages/**/index.vue'))
        .forEach(async entry => {
            let key = entry.split('/').slice(-2, -1)[0];
            let filePath = path.resolve(prepackPath, `${key}.js`);
            await fs.ensureFileSync(filePath);
            await writeFileSync(filePath, createContent(entry));
        });
};

module.exports = prepack;
