const multer = require("multer");
const { Storage } = require("@google-cloud/storage");

// Initialize Google Cloud Storage
const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: "gd-goenka-school"
});

const bucket = storage.bucket(process.env.BUCKET_NAME);

// Configure multer for memory storage
const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Helper function to upload to Google Cloud Storage
const uploadToGCS = async (file) => {
  const fileName = `admission-application/${Date.now()}-${file.originalname}`;
  const blob = bucket.file(fileName);
  
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: file.mimetype
    }
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', err => reject(err));
    
    blobStream.on('finish', async () => {
      await blob.makePublic();
      const publicUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${fileName}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
};

// Upload controller
const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }

    const fileUrl = await uploadToGCS(req.file);
    
    res.status(200).json({
      success: true,
      fileUrl,
      message: "File uploaded successfully"
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to upload file"
    });
  }
};

module.exports = {
  upload: upload.single('file'),
  handleFileUpload
};