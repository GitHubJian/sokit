const root = process.cwd();
const path = require('path');
const fs = require('fs');

let sokitConfigPath = path.resolve(root, 'sokit.config.js');
let cumstomConfig = {};

if (fs.existsSync(sokitConfigPath)) {
    cumstomConfig = require(sokitConfigPath);
}

const defaultConfig = require('./default.js');

const config = Object.assign({}, defaultConfig, cumstomConfig);

module.exports = config;
