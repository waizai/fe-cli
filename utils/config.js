const scripts = {
    init: 'panda init',
    dev: 'panda dev',
    build: 'panda build'
};



const gitIgnore = [
    '/.temp/',
    '/static/',
    'package-lock.json',
    'yarn-error.log*',
    '/node_modules/',
    '.DS_Store',
    '/.idea',
    '/.vscode',
];

const npmrc = [
    'registry=https://registry.npm.taobao.org',
    'phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/',
    'profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/',
    'fse_binary_host_mirror=https://npm.taobao.org/mirrors/fsevents/'
];

