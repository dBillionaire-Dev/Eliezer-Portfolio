const Project = require('../models/projectModel');
const cloudinary = require('../config/cloudinary');
const {uploadToCloudinary} = require('../helpers/cloudinaryHelpers')
const streamifier = require('streamifier');

const uploadProject = async (req, res) => {
  try {
    const { title, page_category, category, description } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const { url, publicId } = await uploadToCloudinary(req.file.buffer);

        const project = await Project.create({
          title,
          page_category,
          category,
          description,
          imageUrl: url,
          imagePublicId: publicId,
        });

        res.status(201).json({
          success: true,
          message: "Project uploaded",
          data: project,
        });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
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

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    // Delete image from Cloudinary
    const publicId = project.imageUrl.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(project.imagePublicId);


    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, page_category, category, description } = req.body;

    const updateData = {
      title,
      page_category,
      category,
      description,
    };

    // If a new image is uploaded
    if (req.file) {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "eliezer-projects" },
        async (error, result) => {
          if (error) {
            return res.status(500).json({
              success: false,
              message: error.message,
            });
          }

          updateData.imageUrl = result.secure_url;

          const project = await Project.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
          );

          if (!project) {
            return res.status(404).json({
              success: false,
              message: "Project not found",
            });
          }

          res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: project,
          });
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
      return;
    }

    // No image update
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { uploadProject, getAllProjects, getProjectsByCategory, deleteProject, updateProject };
