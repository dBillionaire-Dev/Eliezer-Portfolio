const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { uploadProject, getAllProjects, getProjectsByCategory, deleteProject, updateProject } = require('../controllers/projectController');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');

// Public - READ: fetch all projects
router.get('/', getAllProjects);
// READ: fetch projects by category
router.get('/:category', getProjectsByCategory);

// Admin only: Add or delete projects 
//CREATE: upload a new project (with image)
router.post('/', verifyToken, verifyAdmin, upload.single('image'), uploadProject);
//DELETE: delete a project
router.delete('/:id', verifyToken, verifyAdmin, deleteProject);

//UPDATE: Edit an existing project
router.put('/:id', verifyToken, verifyAdmin, upload.single('image'), updateProject);

module.exports = router;
