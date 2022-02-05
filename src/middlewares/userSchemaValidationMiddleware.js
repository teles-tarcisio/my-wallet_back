import { stripHtml } from 'string-strip-html';
import newUserSchema from '../schemas/newUserSchema.js';

export default function userSchemaValidationMiddleware(req, res, next) {

  const newUserData = req.body;
  newUserData.name = stripHtml(newUserData.name).result.trim();
  newUserData.email = stripHtml(newUserData.email).result.trim();
  
  const userValidation = newUserSchema.validate(newUserData);

  if (userValidation.error) {
    console.log(userValidation.error.details[0].message);
    return res.sendStatus(422);
  }

  next();
}