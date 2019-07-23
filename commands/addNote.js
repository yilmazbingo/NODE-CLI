const chalk = require("chalk");
const saveNotes = require("../utils/saveNotes");
const loadNotes = require("../utils/loadNotes");

const getNotes = function() {
  return "Your notes...";
};

const addNote = (title, body) => {
  //json.parse returns  an array of objects
  const notes = loadNotes();

  const findTitle = notes.find(note => note.title === title);

  if (!findTitle) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.white.bold.bgGreen("A new note is added!"));
  } else {
    console.log(chalk.bgRed.bold(`${title} already exist`));
  }
};

module.exports = addNote;
