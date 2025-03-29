const multer = require("multer");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: "gd-goenka-school",
});

const bucket = storage.bucket(process.env.BUCKET_NAME);
bucket
  .exists()
  .then((exists) => {
    if (!exists[0]) {
      console.error("Error: Bucket does not exist or credentials are invalid");
    } else {
      console.log("Successfully connected to Google Cloud Storage bucket");
    }
  })
  .catch((error) => {
    console.error("Error connecting to Google Cloud Storage:", error);
  });

// Multer configuration for memory storage
const multerStorage = multer.memoryStorage();

// File filter for images
const imageFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Only image types (jpeg, jpg, png, webp) are allowed!"),
      false
    );
  }
};

// File filter for PDF
const pdfFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Helper function to upload to Google Cloud Storage
const uploadToGCS = async (file, folder) => {
  const fileName = `${folder}/${Date.now()}-${file.originalname}`;
  const blob = bucket.file(fileName);

  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on("error", (err) => reject(err));

    blobStream.on("finish", async () => {
      await blob.makePublic();
      const publicUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${fileName}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
};

// Middleware to handle single file upload
const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: imageFilter,
}).single("image");

// Middleware to process the upload and store in GCS
const processUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    let folder = "general";
    if (req.originalUrl.includes("/api/v1/faculty")) {
      folder = "faculty";
    } else if (req.originalUrl.includes("/api/v1/gallery")) {
      folder = "gallery";
    } else if (req.originalUrl.includes("/api/v1/faculty")) {
      folder = "faculty";
    } else if (req.originalUrl.includes("/api/v1/event")) {
      folder = "event";
    } else if (req.originalUrl.includes("/api/v1/content")) {
      folder = "content";
    } else if (req.originalUrl.includes("/api/v1/job-application")) {
      folder = "job-application";
    } else if (req.originalUrl.includes("/api/v1/admission-application")) {
      folder = "admission-application";
    }

    const publicUrl = await uploadToGCS(req.file, folder);
    req.fileUrl = publicUrl;
    next();
  } catch (error) {
    next(error);
  }
};

// Multiple files upload middleware
const uploadMultiple = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: imageFilter,
}).array("images");

// Process multiple uploads
const processMultipleUploads = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return next();
    }

    let folder = "general";
    if (req.originalUrl.includes("/api/v1/gallery")) {
      folder = "gallery";
    }

    const uploadPromises = req.files.map((file) => uploadToGCS(file, folder));
    const urls = await Promise.all(uploadPromises);
    req.fileUrls = urls;
    next();
  } catch (error) {
    next(error);
  }
};

// Image and PDF upload middleware
const uploadOneImageAndOnePDF = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
}).fields([
  { name: "image", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]);

// Process image and PDF uploads
const processImageAndPDF = async (req, res, next) => {
  try {
    if (!req.files) {
      return next();
    }

    const uploadPromises = [];
    const folder = "job-application";

    if (req.files.image) {
      uploadPromises.push(uploadToGCS(req.files.image[0], `${folder}/images`));
    }
    if (req.files.resume) {
      uploadPromises.push(
        uploadToGCS(req.files.resume[0], `${folder}/resumes`)
      );
    }

    const [imageUrl, resumeUrl] = await Promise.all(uploadPromises);
    req.fileUrls = {
      imageUrl: imageUrl || null,
      resumeUrl: resumeUrl || null,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  upload,
  processUpload,
  uploadMultiple,
  processMultipleUploads,
  uploadOneImageAndOnePDF,
  processImageAndPDF,
};
