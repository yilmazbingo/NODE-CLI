const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const remove = require("./commands/remove");
const addNote = require("./commands/notes");
const listNotes = require("./commands/listNotes");
const readNote = require("./commands/readNotes");
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: { describe: "note title", demandOption: true, type: "string" },
    body: { describe: "note body", demandOption: true, type: "string" }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: { describe: "remove", demandOption: true, type: "string" },
    body: { describe: "remove", demandOption: true, type: "string" }
  },
  handler(argv) {
    remove(argv.title);
  }
});
yargs.command({
  command: "list",
  describe: "listing commands",

  handler() {
    listNotes();
  }
});
debugger;
yargs.command({
  command: "read",
  describe: "reading command",
  builder: {
    title: {
      describe: "describe",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title);
  }
});
yargs.parse();
console.log("yilmaz");
