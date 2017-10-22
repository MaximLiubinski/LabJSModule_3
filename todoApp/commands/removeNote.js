const fs = require('fs');

function remove(title, pathfile) {
    let notes = new Array();
    if(fs.existsSync(pathfile)) {
        let file = fs.readFileSync(pathfile);
        notes = JSON.parse(file);
        notes = notes.filter( elem => elem['title'] !== title);
        let json = JSON.stringify(notes);
        fs.writeFileSync(pathfile, json);
    } else {
        console.log('Can\'t find file ' + pathfile);
    }
}

module.exports = remove;