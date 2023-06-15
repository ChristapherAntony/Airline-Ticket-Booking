const errorHandlingMiddleware = (err, req, res, next) => {
    console.log(err);
  
    // Extract the status code and error message from the error object
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
   
    // Send a standardized error response
    res.status(statusCode).json({
      error: {
        message: message,
      },
    });
  };
  
  export default errorHandlingMiddleware;
  