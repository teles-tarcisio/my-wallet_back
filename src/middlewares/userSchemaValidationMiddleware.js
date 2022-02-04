import newUserSchema from '../schemas/newUserSchema.js';

export default function userSchemaValidationMiddleware(req, res, next) {
  const userValidation = newUserSchema.validate(req.body);

  if (userValidation.error) {
    console.log(userValidation.error.details[0].message);
    return res.status(422).send('userValidation.error');
  }

  next();
}