import { Router } from 'express';
import { getUserTransactions } from '../controllers/transactionsController.js';

//import { transactionsSchemaValidationMiddleware, isEmailUniqueMiddleware, loginSchemaValidationMiddleware } from '../middlewares/index.js';

const transactionsRouter = Router();
//transactionsRouter.post('/sign-up', userSchemaValidationMiddleware, isEmailUniqueMiddleware, createNewUser);

transactionsRouter.get('/transactions', /*someMiddleware,*/ getUserTransactions);

export default transactionsRouter;