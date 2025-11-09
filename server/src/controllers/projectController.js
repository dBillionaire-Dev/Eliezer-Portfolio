const Project = require('../models/projectModel');
const path = require('path');
const fs = require('fs');

// Upload new project
const uploadProject = async (req, res) => {
  try {
    const { title, page_category, category, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!imageUrl) {
      return res.status(400).json({ 
        success: false, 
        message: 'Image file is required' 
    });
    }

    const project = await Project.create({ title, page_category, category, description, imageUrl });
    res.status(201).json({ 
        success: true, 
        message: 'Project uploaded', 
        data: project 
    });
  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: err.message 
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ 
        success: true, 
        data: projects 
    });
  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: err.message 
    });
  }
};

// Get projects by category
const getProjectsByCategory = async (req, res) => {
  try {
    const page_category = req.params.page_category;
    const projects = await Project.find({ page_category });
    res.json({ 
        success: true, 
        data: projects 
    });
  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: err.message 
    });
  }
};

// Delete project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ 
      success: false, 
      message: 'Project not found' 
    });

    // remove image from uploads
    const imagePath = path.join(__dirname, '../../uploads', path.basename(project.imageUrl));
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    res.status(200).json({ 
      success: true, 
      message: 'Project deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

//Update Existing Project
const updateProject = async (req, res) => {
  try {
    const { title, page_category, category, description } = req.body;
    const updateData = { title, page_category, category, description };

    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!project) {
      return res.status(404).json({ 
        success: false,
        message: 'Project not found' 
      });
    }

    res.status(200).json({ 
      success: true,
      message: 'Project updated successfully', 
      data: project 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Error updating project' 
    });
  }
};

module.exports = { uploadProject, getAllProjects, getProjectsByCategory, deleteProject, updateProject };
