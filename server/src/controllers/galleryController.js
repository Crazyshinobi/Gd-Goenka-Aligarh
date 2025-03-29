const {
  createRecord,
  getRecord,
  deleteRecord,
  updateRecord,
  getSingleRecord,
  getCount,
} = require("../common/commonDatabaseQueries");

const { sendResponse } = require("../utils/responseUtils");
const Gallery = require("../models/Gallery");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: "gd-goenka-school",
});

const bucket = storage.bucket(process.env.BUCKET_NAME);

const createGallery = async (req, res) => {
  const { category } = req.body;
  const imageUrl = req.fileUrl; // Using Cloud Storage URL from middleware

  if (!category || !imageUrl) {
    return sendResponse(res, 400, false, "category and image are required");
  }

  try {
    const recordObj = { category, image: imageUrl };
    const gallery = await createRecord(Gallery, recordObj);

    if (gallery.status) {
      sendResponse(
        res,
        201,
        true,
        "Gallery created successfully",
        gallery.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error.message);
  }
};

const getGallery = async (req, res) => {
  try {
    let gallery;
    if (req.query && req.query.category) {
      const { category } = req.query;
      gallery = await getRecord(Gallery, { category: category });
    } else {
      gallery = await getRecord(Gallery);
    }
    if (gallery && gallery.status) {
      sendResponse(res, 200, true, "Data fetched successfully", gallery.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const getSingleGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const gallery = await getSingleRecord(Gallery, { _id: id });
    if (gallery.status) {
      sendResponse(res, 200, true, "Data fetched successfully", gallery.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const deleteGallery = async (req, res) => {
  const { id } = req.params;

  try {
    const deletingGallery = await Gallery.findById(id);
    if (!deletingGallery) {
      return sendResponse(res, 404, false, "Gallery not found");
    }

    // Delete from Google Cloud Storage
    if (deletingGallery.image) {
      const fileName = deletingGallery.image.split("/").pop(); // Get filename from URL
      try {
        await bucket.file(`gallery/${fileName}`).delete();
      } catch (error) {
        console.error("Failed to delete image from Cloud Storage:", error);
      }
    }

    const deletedGallery = await deleteRecord(Gallery, { _id: id });

    if (deletedGallery.status) {
      sendResponse(
        res,
        200,
        true,
        "Gallery and associated files deleted successfully",
        deletedGallery.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        deletedGallery.data
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const updateGallery = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    const galleryToUpdate = await Gallery.findById(id);

    if (!galleryToUpdate) {
      return sendResponse(res, 404, false, "No record found");
    }

    let updatedObj = { category };

    if (req.fileUrl) {
      updatedObj.image = req.fileUrl;

      // Delete the old image from Cloud Storage if it exists
      if (galleryToUpdate.image) {
        const oldFileName = galleryToUpdate.image.split("/").pop();
        try {
          await bucket.file(`gallery/${oldFileName}`).delete();
        } catch (error) {
          console.error(
            "Failed to delete old image from Cloud Storage:",
            error
          );
        }
      }
    }

    const updatedGallery = await updateRecord(Gallery, { _id: id }, updatedObj);

    if (updatedGallery.status) {
      sendResponse(res, 200, true, "Updated successfully", updatedGallery.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const countGallery = async (req, res) => {
  try {
    const response = await getCount(Gallery);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = {
  createGallery,
  getGallery,
  deleteGallery,
  updateGallery,
  getSingleGallery,
  countGallery,
};
