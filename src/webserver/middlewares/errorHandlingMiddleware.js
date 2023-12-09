export default function errorHandlingMiddleware(err, req, res, next) {
  res.status(err.code || 500).json({
    name: err.name || "Internal Server Error",
    message: err.message || "Something went wrong",
  });
}
