const Task = require("../models/taskModel");
const { formatMongoData, checkObjectId } = require("../helpers/dbHelper");
const constants = require("../constants/index");

module.exports.createTask = async (serviceData) => {
  try {
    let task = new Task({ ...serviceData });
    let result = await task.save();
    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllTasks = async (userId) => {
  try {
    let tasks = await Task.find({ userId })
      .sort({ createdAt: -1 })
      .select("createdAt title description status");

    return {
      tasks: formatMongoData(tasks),
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getTaskById = async ({ id }) => {
  try {
    checkObjectId(id);
    let task = await Task.findById(id);
    if (!task) {
      throw new Error(constants.taskMessage.TASK_NOT_FOUND);
    }
    return formatMongoData(task);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateTask = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let task = await Task.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!task) {
      throw new Error(constants.taskMessage.TASK_NOT_FOUND);
    }
    return formatMongoData(task);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.deleteTask = async ({ id }) => {
  try {
    checkObjectId(id);
    let task = await Task.findByIdAndDelete(id);
    if (!task) {
      throw new Error(constants.taskMessage.TASK_NOT_FOUND);
    }
    return formatMongoData(task);
  } catch (error) {
    throw new Error(error);
  }
};
