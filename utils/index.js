
const glob = require('glob');
const {copySync, writeJsonSync} = require('fs-extra');
const {relative, resolve} = require('path');



const rootPath = process.cwd();
const projectTemplate = resolve(__dirname, '../../templates');
const package = `${rootPath}/package.json`;


const updatePackageFile = () => {
    const pkg = require(package);
    pkg.scripts = Object.assign(scripts, pkg.scripts);
    pkg['pre-commit'] = 'pre-eslint';
    writeJsonSync(package, pkg, {spaces: 4});
};

const produceFile = (file, str) => {
    writeFileSync(`${rootPath}/${file}`, str.join('\n') + '\n');
};


// init项目
const initProject = () => {
    copySync(projectTemplate, rootPath);
    glob
        .sync(`${projectTemplate}/**/*`, {nodir: true, dot: true})
        .filter(v => !v.includes('.DS_Store'))
        .map((v, i, arr) =>
            log(`${i === arr.length - 1 ? '└─' : '├─'} ${relative(projectTemplate, v)}`, 'green')
        );

    updatePackageFile();
    produceFile('.npmrc', npmrc);
    produceFile('.gitignore', gitIgnore);
}