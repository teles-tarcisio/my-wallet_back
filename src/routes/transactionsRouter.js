import { Router } from 'express';
import { getUserTransactions, createTransaction } from '../controllers/transactionsController.js';


const transactionsRouter = Router();
transactionsRouter.post('/transactions', createTransaction);

transactionsRouter.get('/transactions', getUserTransactions);

export default transactionsRouter;