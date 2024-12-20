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
const fs = require("fs");
const path = require("path");

const createGallery = async (req, res) => {
  const { category } = req.body;
  const imagePath = req.file?.path;

  if (!category || !imagePath) {
    return sendResponse(res, 400, false, "category and image are required");
  }

  try {
    const recordObj = { category, image: imagePath };
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

    const imagePath = path.join(
      __dirname,
      "..",
      "uploads/gallery",
      path.basename(deletingGallery.image)
    );

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Failed to delete image file:", unlinkErr);
          } else {
            console.log("Image file deleted:", imagePath);
          }
        });
      } else {
        console.log(err);
      }
    });

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

    if (req.file) {
      updatedObj.image = req.file.path;

      // Delete the old image if it exists
      if (galleryToUpdate.image) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          galleryToUpdate.image.replace("src", "")
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error(`Error deleting old image: ${err.message}`);
          }
        });
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
  countGallery
};
