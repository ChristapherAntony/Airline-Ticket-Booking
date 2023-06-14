const createErrorClass = (name, statusCode) => {
    return class extends Error {
        statusCode;
        constructor(message) {
            super(message);
            this.name = name;
            this.statusCode = statusCode;
        }
    };
};

export const ERROR = {
    HttpError: createErrorClass('HttpError', 500),
    UserExistsError: createErrorClass('UserExistsError', 409), 
    NotFoundError: createErrorClass('NotFoundError', 404),
    BadRequestError: createErrorClass('BadRequestError', 400),
    InvalidInputError: createErrorClass('InvalidInputError', 422),
    OtpMismatchError: createErrorClass('OtpMismatchError', 400), // New error class
    OTPExpiredError: createErrorClass('OTPExpiredError', 400),
};
