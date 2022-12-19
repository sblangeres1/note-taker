const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const { notes } = require('../db/db.json');
const { createNewNote, deleteNote } = require('../lib/notes');
console.log(Object.keys(notes).length);

// Route to get all notes
router.get('/notes', (req, res) => {
  let saved = notes;
  res.json(saved);
});

// Route to add a note
router.post('/notes', (req, res) => {
  req.body.id = uuid.v4();
  const note = createNewNote(req.body, notes)
  res.json(note);
});

// Route to delete a note
router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, notes);
  res.end();
});

module.exports = router;
