const express = require('express');
const router = express.Router();
const path = require('path');

// Route to display notes html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// Route to display start page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;