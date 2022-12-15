const express = require('express');
const router = express.Router();
const { notes } = require('../../db/db');
const { createNewNote, deleteNote } = require('../../lib/notes');

// Route to get all notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// Route to add a note
router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  res.json(createNewNote(req.body, notes));
});

// Route to delete a note
router.delete('/notes', (req, res) => {
  let id = req.body.id;
  res.json(deleteNote(id, notes));
});

module.exports = router;
