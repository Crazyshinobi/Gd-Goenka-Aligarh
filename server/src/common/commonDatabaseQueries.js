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
    runValidators: true,
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

const getCount = async (Model, query = {}) => {
  const count = await Model.countDocuments(query).exec();
  return {
    status: true,
    data: count,
  };
};


module.exports = {
  createRecord,
  getRecord,
  updateRecord,
  deleteRecord,
  getSingleRecord,
  getCount
};
