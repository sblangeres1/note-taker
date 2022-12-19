const fs = require('fs');
const path = require('path');

//Create note
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      notes: notesArray
    }, null, 2)
  )
  return note;
};

//Delete note
function deleteNote(key, notesArray) {
  const index = notesArray.findIndex((note) => note.id === key)
  const removed = notesArray.splice(index, 1);
  console.log(notesArray);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      notes: notesArray
    }, null, 2)
  )
};

module.exports = { createNewNote, deleteNote };