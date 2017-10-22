const fs = require('fs');

function list(pathfile) {
    let notes = new Array();
    if(fs.existsSync(pathfile)) {
        let file = fs.readFileSync(pathfile);
        notes = JSON.parse(file);
        console.log(notes);
    } else {
    console.log('Can\'t find file ' + pathfile);
    }
}

module.exports = list;