const {
  createRecord,
  getRecord,
  getSingleRecord,
  deleteRecord,
  updateRecord,
  getCount,
} = require("../common/commonDatabaseQueries");

const { sendResponse } = require("../utils/responseUtils");
const Content = require("../models/Content");
const fs = require("fs");
const path = require("path");

const createContent = async (req, res) => {
  const { type, title, description } = req.body;
  const images = req.files && req.files.map((file) => file.path);
  if (!title || !description || !images) {
    return sendResponse(res, 400, false, "All Fields are required.");
  }
  try {
    const recordObj = {
      type,
      title,
      description,
      images,
    };
    const result = await createRecord(Content, recordObj);
    sendResponse(res, 201, true, "Content created successfully", result.data);
  } catch (error) {
    console.error(error);

    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const getContent = async (req, res) => {
  try {
    let content;

    if (req.query && req.query.type) {
      const { type } = req.query;
      content = await getRecord(Content, { type: type });
    } else {
      content = await getRecord(Content);
    }
    if (content && content.status) {
      sendResponse(res, 200, true, "Data fetched successfully", content.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong", content);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const getSingleContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await getSingleRecord(Content, { _id: id });
    if (content.status) {
      sendResponse(res, 200, true, "Data fetched successfully", content.data);
    } else {
      sendResponse(res, 404, false, "Record not found", content);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const contentToDelete = await getSingleRecord(Content, { _id: id });
    if (!contentToDelete) {
      return sendResponse(res, 404, false, "Event not found");
    }

    const imagePaths = contentToDelete.data.images.map((image) => {
      return path.join(
        __dirname,
        "..",
        "uploads/content",
        path.basename(image)
      );
    });

    imagePaths.forEach((imagePath) => {
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
    });

    const deletedContent = await deleteRecord(Content, { _id: id });

    if (deletedContent.status) {
      sendResponse(
        res,
        200,
        true,
        "Content and associated files deleted successfully",
        deletedContent.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        deletedContent.data
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const updateContent = async (req, res) => {
  const { id } = req.params;
  const { type, title, description } = req.body;

  try {
    const contentToUpdate = await getSingleRecord(Content, { _id: id });

    if (!contentToUpdate) {
      return sendResponse(res, 404, false, "Content not found");
    }

    // Create an object with fields to update
    let updatedObj = {
      type,
      title,
      description,
    };

    // Handle image updates
    if (req.files && req.files.length > 0) {
      updatedObj.images = req.files.map((file) => file.path);
      if (
        contentToUpdate.data.images &&
        contentToUpdate.data.images.length > 0
      ) {
        const oldImagePaths = contentToUpdate.data.images.map((image) => {
          return path.join(__dirname, "..", image.replace("src", ""));
        });

        oldImagePaths.forEach((imagePath) => {
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
              console.log("Old image does not exist:", imagePath);
            }
          });
        });
      }
    } else {
      // If no new images are provided, retain existing images
      updatedObj.images = contentToUpdate.images;
    }

    // Update the event in the database
    const updatedcontent = await updateRecord(Content, { _id: id }, updatedObj);

    if (updatedcontent.status) {
      sendResponse(res, 200, true, "Updated successfully", updatedcontent.data);
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        updatedcontent.data
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const countContent = async (req, res) => {
  try {
    const response = await getCount(Content);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = {
  createContent,
  getContent,
  deleteContent,
  getSingleContent,
  updateContent,
  countContent
};
