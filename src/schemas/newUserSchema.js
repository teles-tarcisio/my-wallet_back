import Joi from 'joi';

const newUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(14).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(3).required()
});

export default newUserSchema;