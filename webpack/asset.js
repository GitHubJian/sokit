const { pathConfig } = require('./config');
const { existsSync } = require('fs');

let htmlAssets = [];

if (existsSync(`${pathConfig.dll}/index.json`)) {
    htmlAssets = Object.entries(require(`${pathConfig.dll}/index.json`))
        .map(([k, v]) => {
            return Object.values(v);
        })
        .reduce((prev, cur) => {
            prev.push(
                ...cur
                    .map(v => v.slice(1))
                    .filter(
                        v =>
                            typeof v === 'string' &&
                            ['.js', '.css'].some(k => v.endsWith(k))
                    )
            );
            return prev;
        }, []);
}

module.exports = { htmlAssets };
