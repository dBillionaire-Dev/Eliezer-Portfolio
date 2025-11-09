const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');

// POST: contact form message
router.post('/', sendMessage);

// GET: all messages (admin)
router.get('/', verifyToken, verifyAdmin, getMessages);

module.exports = router;