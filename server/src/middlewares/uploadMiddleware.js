const multer = require("multer");

// Store file in memory (required for Cloudinary)
const storage = multer.memoryStorage();

// keep image validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const isValid =
    allowedTypes.test(file.mimetype) &&
    allowedTypes.test(file.originalname.toLowerCase());

  if (isValid) cb(null, true);
  else cb(new Error("Only image files are allowed"));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
