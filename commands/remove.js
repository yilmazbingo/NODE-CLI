const chalk = require("chalk");
const loadNotes = require("../utils/loadNotes");
const saveNotes = require("../utils/saveNotes");

const remove = title => {
  const notes = loadNotes();

  const findTitle = notes.filter(note => note.title === title);

  if (findTitle.length === 0) {
    console.log(chalk.bold.red(`${title} does not exist`));
  } else {
    const removedNotes = notes.filter(note => note !== findTitle[0]);
    saveNotes(removedNotes);
  }
};

module.exports = remove;
