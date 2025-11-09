// authRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { registerAdmin, loginAdmin } = require("../controllers/authController");

// Register (only once)
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

// ✅ Verify token using middleware
router.get("/verify", protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user, 
  });
});

module.exports = router;
