const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: [true, 'Name cannot be blank']
    },
    email: { 
        type: String, 
        required: [true, 'Please input a valid email address']
    },
    subject: { 
        type: String 
    },
    message: { 
        type: String, 
        required: [true, 'Message cannot be empty']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
