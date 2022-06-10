import { stripHtml } from 'string-strip-html';
import loginSchema from '../schemas/loginSchema.js';

export default function loginSchemaValidationMiddleware(req, res, next) {
  const userData = req.body;
  userData.email = stripHtml(userData.email).result.trim();
      
  const userValidation = loginSchema.validate(userData);

  if (userValidation.error) {
    console.error(userValidation.error.details[0].message);
    return res.sendStatus(422);
  }
  next();
}