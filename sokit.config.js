const config = require('config');

const pathConfig = config.get('path');
const projectConfig = config.get('project');

module.exports = {
    pathConfig,
    projectConfig
};
