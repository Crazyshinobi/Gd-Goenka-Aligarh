const createRecord = async (Model, recordObj) => {
  const result = await Model.create(recordObj);
  return {
    status: true,
    data: result,
  };
};

const getRecord = async (Model, query = {}, options = {}) => {
  const result = await Model.find(query, options).exec();
  return {
    status: true,
    data: result,
  };
};

const getSingleRecord = async (Model, query) => {
  const result = await Model.findOne(query).exec();
  return {
    status: true,
    data: result,
  };
};

const updateRecord = async (Model, query, updateObj, options = {}) => {
  const result = await Model.findOneAndUpdate(query, updateObj, {
    new: true,
    ...options,
  }).exec();
  return {
    status: true,
    data: result,
  };
};

const deleteRecord = async (Model, query) => {
  const result = await Model.findOneAndDelete(query).exec();
  return {
    status: true,
    data: result,
  };
};

module.exports = {
  createRecord,
  getRecord,
  updateRecord,
  deleteRecord,
  getSingleRecord,
};

// const { createRecord, getRecord, updateRecord, deleteRecord } = require('./common_database_queries');
// const Employee = require('./models/Employee'); // Your Mongoose model

// // Create a record
// await createRecord(Employee, { name: "John Doe", employeeId: "12345", salary: 50000 });

// // Get records
// await getRecord(Employee, { salary: { $gt: 30000 } });

// // Update a record
// await updateRecord(Employee, { employeeId: "12345" }, { salary: 55000 });

// // Delete a record
// await deleteRecord(Employee, { employeeId: "12345" });
