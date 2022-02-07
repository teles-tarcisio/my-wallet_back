//import bcrypt from 'bcrypt';
//import { v4 as uuidv4 } from 'uuid';
import db from '../dbConfig.js';

export async function getUserTransactions(req, res) {
  try {    
    const transactionsPromise = await db.collection('transactions').find({}).toArray();
    res.status(501).send(transactionsPromise);
    return;
  } catch (error) {
    console.log(error, '!erro! obtendo transações do bd');
    res.sendStatus(500);
  }
}

/*
db.transactions.insertMany([
  {
    date: "30/11",
    description: "Almoço mãe",
    amount: 39.90,
    type: "expense"
  },
  {
    date: "27/11",
    description: "Mercado",
    amount: 542.54,
    type: "expense"
  },
  {
    date: "26/11",
    description: "Compras churrasco",
    amount: 67.60,
    type: "expense"
  },
  {
    date: "20/11",
    description: "Empréstimo Maria",
    amount: 500.00,
    type: "revenue"
  },
  {
    date: "15/11",
    description: "Salário",
    amount: 3000.00,
    type: "revenue"
  }
]) 
*/