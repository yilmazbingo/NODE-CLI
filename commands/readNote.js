const loadNotes = require("../utils/loadNotes");
const chalk = require("chalk");

const readNote = title => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  console.log(note);
  if (note) {
    console.log(
      chalk.green.bold("title:", note.title) + chalk.white.bold(note.body)
    );
  } else {
    console.log(chalk.bgRed.white(`${title} not found`));
  }
};

module.exports = readNote;
