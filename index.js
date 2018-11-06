#!/usr/bin/env node
const commander = require('commander');
const pkg = require('./package.json');

commander
    .version(pkg.version)
    .usage('[Options]')
    .option('dll', 'DLL 打包')
    .option('build', '打包')
    .option('webpack', '全量打包')
    .parse(process.argv);

if (commander.dll) {
    const { dllBuild } = require('./webpack');
    (async () => {
        try {
            dllBuild();
        } catch (e) {
            console.log(e);
        }
    })();
}

if (commander.build) {
    const { build } = require('./webpack');
    (async () => {
        try {
            await build();
        } catch (e) {
            console.log(e);
        }
    })();
}

if (commander.webpack) {
    const { build, dllBuild } = require('./webpack');
    (async () => {
        try {
            await dllBuild();
            await build();
        } catch (e) {
            console.log(e);
        }
    })();
}
