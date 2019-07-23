const chalk = require("chalk");
const loadNotes = require("../utils/loadNotes");

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue.yellow.bold.underline("LIST OF YOUR NOTES"));
  console.log(notes);
};

module.exports = listNotes;
