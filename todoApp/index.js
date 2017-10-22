const argv = require('yargs').argv;
const Commander = require('./commands/commander.js');

let commander = new Commander('./notes.json');

switch (process.argv[2]){
    case 'add':
        if(argv.title && argv.body){
            commander.add(argv.title, argv.body)
        }else{
            console.log("You have add note with --title 'title' --body 'body'")
        }
        break;

    case 'list':
        commander.list();
        break;

    case 'read':
        if(argv.title){
            commander.read(argv.title)
        }else{
            console.log("You have read note by --title 'title'")
        }
        break;

    case 'remove':
        if(argv.title){
            commander.remove(argv.title)
        }else{
            console.log("You have remove note by --title 'title'")
        }
        break;

    default:
        console.log('unknown command\n' +
            "command(add/list/read/remove) --title 'title' --body 'body'");
        break;
}
