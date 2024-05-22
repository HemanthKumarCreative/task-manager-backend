module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  taskMessage: {
    TASK_CREATED: "Task Created Successfully",
    TASK_FETCHED: "Task Fetched Successfully",
    TASK_UPDATED: "Task Updated Successfully",
    TASK_DELETED: "Task Deleted Successfully",
    TASK_NOT_FOUND: "Task Not Found",
  },
  userMessage: {
    SIGNUP_SUCCESS: "Signup Success",
    LOGIN_SUCCESS: "Login Success",
    DUPLICATE_EMAIL: "User already exist with given email",
    USER_NOT_FOUND: "User not found",
    INVALID_PASSWORD: "Invalid password",
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid fields",
    TOKEN_MISSING: "Token missing from header",
  },
  databaseMessage: {
    INVALID_ID: "Invalid Id",
  },
};
