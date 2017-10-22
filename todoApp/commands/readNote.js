const fs = require('fs');

function read(title, pathfile){
    let notes = new Array();
    if(fs.existsSync(pathfile)) {
        let file = fs.readFileSync(pathfile);
        notes = JSON.parse(file);
        console.log(notes.find(note => note["title"] === title));
    }else{
        console.log('Can\'t find file ' + pathfile);
    }
}

module.exports = read;