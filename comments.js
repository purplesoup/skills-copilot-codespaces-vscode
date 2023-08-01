// Create web server please
// 1. /comments/new
// 2. /comments/:id/edit
// 3. /comments/:id/delete

const express = require('express');
const router = express.Router();

// 1. /comments/new
router.get('/new', (req, res) => {
  res.send('New comment');
});

// 2. /comments/:id/edit
router.get('/:id/edit', (req, res) => {
  res.send(`Edit comment ${req.params.id}`);
});

// 3. /comments/:id/delete
router.get('/:id/delete', (req, res) => {
  res.send(`Delete comment ${req.params.id}`);
});

module.exports = router;
