const Message = require('../models/messageModel');

// Save a new message
const sendMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json({ 
        success: true, 
        message: 'Message sent successfully', 
        data: newMessage 
    });
  } catch (error) {
    res.status(400).json({ 
        success: false, 
        message: error.message 
    });
  }
};

// Fetch all messages (admin use)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        message: messages
    });
  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: error.message 
    });
  }
};

module.exports = {
    sendMessage, 
    getMessages
};
