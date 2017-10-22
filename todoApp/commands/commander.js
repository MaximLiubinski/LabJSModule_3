const add = require('./addNote');
const list = require('./listNotes');
const read = require('./readNote');
const remove = require('./removeNote');

class Commander{
    constructor(pathfile){
        this.pathfile = pathfile;
    }

    add(title, body, pathfile = this.pathfile){
        add(title, body, pathfile);
    }

    list(pathfile = this.pathfile){
        list(pathfile);
    }

    read(title, pathfile = this.pathfile){
        read(title, pathfile);
    }

    remove(title, pathfile = this.pathfile){
        remove(title, pathfile);
    }
}

module.exports = Commander;
