const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Helper to generate JWT
const generateToken = (admin) => {
  return jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// Register Admin (use once manually)
const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const admin = await Admin.create({ username, email, password });

    const token = generateToken(admin); 

    res.status(201).json({
      success: true,
      data: {
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Invalid email provided",
      });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = generateToken(admin);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { registerAdmin, loginAdmin };
