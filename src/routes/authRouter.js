import { Router } from 'express';
import { createUser, loginUser } from '../controllers/authController.js';
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', userSchemaValidationMiddleware, createUser);
authRouter.post('/sign-in', loginUser);

export default authRouter;