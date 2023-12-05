export default function errorHandlingMiddleware(err, req, res, next) {
  if (err.statusCode === 404) {
    // Route not found
    res.status(404).json({ error: "Route not found. Please check api folder" });
  } else {
    // Internal server error
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
