import { Router } from 'express';
import authRouter from './authRouter.js';
import transactionsRouter from './transactionsRouter.js';

const mainRouter = Router();
mainRouter.use(authRouter);
mainRouter.use(transactionsRouter);

export default mainRouter;