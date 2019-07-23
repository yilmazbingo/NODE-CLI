const fs = require("fs");

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json");
    const dataString = data.toString();
    return JSON.parse(dataString); //returns an array of objects
  } catch (e) {
    return [];
  }
};

module.exports = loadNotes;
