const fs = require('fs');

function add(title, body, pathfile) {
    let notes = new Array();
    if(fs.existsSync(pathfile)) {
        let file = fs.readFileSync(pathfile);
        notes = JSON.parse(file);
    }
    if(notes.some( note => (note["title"] === title)) ){
        console.log("You are already have note with this title!");
    }else{
        notes.push({"title": title, "body": body});
        let json = JSON.stringify(notes, null, "\t");
        fs.writeFile(pathfile, json, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = add;
