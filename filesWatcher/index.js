const argv = require('yargs').argv;
const DirWatcher = require('./dirwatcher');

let dirWatcher = new DirWatcher();

if(argv.path.substr(-1) !== "\\"){
    dirWatcher.watcher(argv.path + "\\", argv.delay);
} else{
    dirWatcher.watcher(argv.path, argv.delay);
}
