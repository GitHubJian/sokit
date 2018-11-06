const { entry } = require('./entry');

const afterpack = async () => {
    Object.entries(entry).forEach(([k, v]) => {
        console.log('\n 🌏 --> 路由：');
        console.log(`${k}.html`);
    });
};

module.exports = afterpack;
