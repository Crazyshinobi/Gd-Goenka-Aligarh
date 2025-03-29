const Faculty = require("../models/Faculty");
const {
  createRecord,
  getRecord,
  deleteRecord,
  updateRecord,
  getSingleRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: "gd-goenka-school",
});

const bucket = storage.bucket(process.env.BUCKET_NAME);

const createFaculty = async (req, res) => {
  const { name } = req.body;
  const imageUrl = req.fileUrl; // Using Cloud Storage URL from middleware

  if (!name || !imageUrl) {
    return sendResponse(res, 400, false, "Faculty name and image are required");
  }

  try {
    const recordObj = { name, image: imageUrl };
    const faculty = await createRecord(Faculty, recordObj);

    if (faculty.status) {
      sendResponse(
        res,
        201,
        true,
        "Faculty created successfully",
        faculty.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error.message);
  }
};

const getFaculty = async (req, res) => {
  try {
    let faculty = await getRecord(Faculty);

    if (faculty && faculty.status) {
      sendResponse(res, 200, true, "Data fetched successfully", faculty.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

// const getSingleGallery = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const gallery = await getSingleRecord(Gallery, { _id: id });
//     if (gallery.status) {
//       sendResponse(res, 200, true, "Data fetched successfully", gallery.data);
//     } else {
//       sendResponse(res, 500, false, "Something went wrong");
//     }
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, false, "Internal Server Error", error);
//   }
// };

const deleteFaculty = async (req, res) => {
  const { id } = req.params;

  try {
    const deletingFaculty = await Faculty.findById(id);
    if (!deletingFaculty) {
      return sendResponse(res, 404, false, "Faculty not found");
    }

    // Delete from Google Cloud Storage
    if (deletingFaculty.image) {
      const fileName = deletingFaculty.image.split("/").pop(); // Get filename from URL
      try {
        await bucket.file(`faculty/${fileName}`).delete();
      } catch (error) {
        console.error("Failed to delete image from Cloud Storage:", error);
      }
    }

    const deletedFaculty = await deleteRecord(Faculty, { _id: id });

    if (deletedFaculty.status) {
      sendResponse(
        res,
        200,
        true,
        "Faculty and associated files deleted successfully",
        deletedFaculty.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        deletedFaculty.data
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const updateFaculty = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const facultyToUpdate = await Faculty.findById(id);

    if (!facultyToUpdate) {
      return sendResponse(res, 404, false, "No record found");
    }

    let updatedObj = { name };

    if (req.fileUrl) {
      updatedObj.image = req.fileUrl;

      // Delete the old image from Cloud Storage if it exists
      if (facultyToUpdate.image) {
        const oldFileName = facultyToUpdate.image.split("/").pop();
        try {
          await bucket.file(`faculty/${oldFileName}`).delete();
        } catch (error) {
          console.error(
            "Failed to delete old image from Cloud Storage:",
            error
          );
        }
      }
    }

    const updatedFaculty = await updateRecord(Faculty, { _id: id }, updatedObj);

    if (updatedFaculty.status) {
      sendResponse(res, 200, true, "Updated successfully", updatedFaculty.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};



module.exports = {
  createFaculty,
  getFaculty,
  deleteFaculty,
  updateFaculty
};
