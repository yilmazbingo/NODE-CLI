const fs = require("fs");

const saveNotes = notes => {
  //fs carries only strings
  const notesStringified = JSON.stringify(notes);
  //fs module overwrites.
  fs.writeFileSync("notes.json", notesStringified);
};

module.exports = saveNotes;
