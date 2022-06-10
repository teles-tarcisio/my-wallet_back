import { Router } from 'express';

import {
  createNewUser,
  loginUser,
} from '../controllers/authController.js';

import {
  userSchemaValidationMiddleware,
  isEmailUniqueMiddleware,
  loginSchemaValidationMiddleware,
} from '../middlewares/index.js';

const authRouter = Router();
authRouter.post('/sign-up', userSchemaValidationMiddleware, isEmailUniqueMiddleware, createNewUser);

authRouter.post('/sign-in', loginSchemaValidationMiddleware, loginUser);

export default authRouter;