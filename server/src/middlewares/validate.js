import { body, validationResult } from 'express-validator';

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Format validation errors into a readable format
    const formattedErrors = errors.array().map((error) => {
      return {
        field: error.param,
        message: error.msg,
      };
    });

    return res.status(422).json({
      error: {
        message: 'Otp is invalided',
        details: formattedErrors,
      },
    });
  }
  next();
};


// Define validation and sanitization rules for the signin endpoint
const validateEmail = [
  body('*').trim().escape(),
  body('email').isEmail().withMessage('Email is not valid').normalizeEmail(),

  handleValidationErrors,
];

const validateUserName = [
  body('user_name')
    .trim()
    .notEmpty()
    .withMessage('User name is required')
    .isLength({ max: 20 })
    .withMessage('User name must be less than or equal to 20 characters'),

  handleValidationErrors,
];

const validateOTP = [
  body('*').trim().escape(),
  body('email').isEmail().withMessage('Email is not valid').normalizeEmail(),
  body('otp')
    .isNumeric().withMessage('OTP must be a number')
    .isLength({ min: 6, max: 6 }).withMessage('OTP must be exactly 6 digits'),
    
  handleValidationErrors,
];

export { validateEmail, validateOTP, validateUserName };
