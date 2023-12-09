const serverError = (message, { status }) => {
  const error = new Error(message);
  error.name = "Server Error";
  error.code = status;
  return error;
};

export default serverError;
