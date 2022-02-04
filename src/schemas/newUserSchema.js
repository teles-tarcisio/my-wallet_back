import Joi from 'joi';

const newUserSchema = Joi.object({
  name: Joi.string().min(3).max(14).required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});

export default newUserSchema;