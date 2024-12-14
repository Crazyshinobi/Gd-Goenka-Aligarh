const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set up the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;

    if (req.originalUrl.includes("/api/v1/faculty")) {
      uploadPath = "src/uploads/faculty";
    } else if (req.originalUrl.includes("/api/v1/gallery")) {
      uploadPath = "src/uploads/gallery";
    } else if (req.originalUrl.includes("/api/v1/event")) {
      uploadPath = "src/uploads/event";
    } else if (req.originalUrl.includes("/api/v1/content")) {
      uploadPath = "src/uploads/content";
    } else {
      uploadPath = "src/uploads/";
    }

    // Check if the directory exists, create it if it doesn't
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        return cb(err); // If there's an error creating the directory, pass it to the callback
      }
      cb(null, uploadPath); // Set the destination folder
    });
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // File name
  },
});

// File filter to accept images
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(
      new Error("Only image types (jpeg, jpg, png) files are allowed!"),
      false
    );
  }
};

// Set up multer middleware to handle both image and PDF
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit files to 5MB
  },
  fileFilter: fileFilter,
}).single("image");

const uploadMultiple = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit files to 5MB
  },
  fileFilter: fileFilter,
}).array("images");

module.exports = { upload, uploadMultiple };
