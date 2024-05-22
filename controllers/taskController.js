const taskService = require("../services/taskService");
const constants = require("../constants");

module.exports.createTask = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await taskService.createTask(req.body);
    response.status = 201;
    response.message = constants.taskMessage.TASK_CREATED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getAllTasks = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await taskService.getAllTasks(
      req.params.userId
    );
    response.status = 200;
    response.message = constants.taskMessage.TASK_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getTaskById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await taskService.getTaskById(req.params);
    response.status = 200;
    response.message = constants.taskMessage.TASK_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.updateTask = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await taskService.updateTask({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = constants.taskMessage.TASK_UPDATED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.deleteTask = async (req, res) => {
  let response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await taskService.deleteTask(req.params);
    response.status = 200;
    response.message = constants.taskMessage.TASK_DELETED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
