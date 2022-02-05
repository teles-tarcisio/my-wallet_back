import { Router } from 'express';
import { createNewUser } from '../controllers/authController.js';
import { isEmailUniqueMiddleware } from '../middlewares/isEmailUniqueMiddleware.js';
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', userSchemaValidationMiddleware, isEmailUniqueMiddleware, createNewUser);

export default authRouter;