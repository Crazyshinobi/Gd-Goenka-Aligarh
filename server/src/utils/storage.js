const { Storage } = require('@google-cloud/storage');

// Initialize storage
const storage = new Storage();
const bucket = storage.bucket(process.env.BUCKET_NAME);

const uploadFile = async (file) => {
  try {
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype
      }
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (error) => reject(error));
      blobStream.on('finish', async () => {
        await blob.makePublic();
        const publicUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${blob.name}`;
        resolve(publicUrl);
      });
      blobStream.end(file.buffer);
    });
  } catch (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }
};

module.exports = { uploadFile, bucket };