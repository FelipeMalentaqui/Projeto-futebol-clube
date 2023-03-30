import * as Joi from 'joi';

const validateUserSchema = Joi.object({
  email: Joi.string().email().required(),
  // password: Joi.string().min(6).required(),
});

export default validateUserSchema;
