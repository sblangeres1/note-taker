const fs = require('fs');
const path = require('path');

//Create note
function createNewNote(body, notes) {
  const note = body;
  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      notes
    }, null, 2)
  )
  return note;
};

//Delete note
function deleteNote(id, notes) {
  const removed = notes.splice(id, 1);
  console.log(notes);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      notes
    }, null, 2)
  )
  return removed;
};

module.exports = { createNewNote, deleteNote };