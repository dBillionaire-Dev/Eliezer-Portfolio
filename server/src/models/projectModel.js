const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required']
},
  page_category: {
    type: String,
    enum: ['brand-identity', 'business-creatives', 'poster-design'],
    required: [true, 'Page category is required']
},
  category: { 
    type: String, 
    required: [true, 'Category is required']
},
  description: { 
    type: String, 
    required: [true, 'Description is required']
},
  imageUrl: { 
    type: String, 
    required: [true, 'Image is required']
},
imagePublicId: {
  type: String,
  required: true,
}
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Project', projectSchema);
