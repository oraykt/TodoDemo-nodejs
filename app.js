const _ = require('lodash');
const yargs = require('yargs');
const moduleJs = require('./module.js');
const args = yargs.argv;

let command = args._[0];
console.log("Your command is ", command);
switch (command) {
    case "addItem":
        moduleJs.addItem(args.title, args.desc, args.date);
        break;
    case "showList":
        moduleJs.showList();
        break;
    case "readItem":
        moduleJs.readItem(args.title);
        break;
    case "deleteItem":
        moduleJs.deleteItem(args.title);
        break;
    default:
        console.log("Command is not found!");
        break;
}
