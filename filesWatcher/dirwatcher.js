const importer = require('./importer.js');
const fs = require('fs');
const pathLib = require('path');
const events = require('events');

let eventEmitter = new events.EventEmitter();
let fsTimeout = null;

class DirWatcher {
    constructor (){}
    watcher (path, delay) {
        eventEmitter.on("changing", (path, filename) =>{
            importer.import(path,filename);
        });

        eventEmitter.on("changingSync", (path, filename) =>{
            importer.importSync(path,filename);
        });

        fs.watch(path, (event,filename) => {
            if (pathLib.extname(filename) === ".csv") {
                if (!fsTimeout) {
                    if (event === "change" || event === "rename") {
                        eventEmitter.emit("changing", path, filename);
                    }
                    fsTimeout = setTimeout(() => {
                        fsTimeout = null;
                    }, parseInt(delay));
                }
            }
        });
    }
}
module.exports = DirWatcher;