import db from '../dbConfig.js';
import dayjs from 'dayjs';


export async function getUserTransactions(req, res) {
  try {    
    const token = req.headers.authorization.replace('Bearer ', '');
    const userID = await getUserByToken(token);
    const transactionsPromise = await db.collection('transactions').find({userID: userID}).toArray();
    res.status(201).send(transactionsPromise);
    return;
  } catch (error) {
    console.error(error, '!erro!  obtendo transações do bd');
    return res.sendStatus(500);
  }
}

async function getUserByToken(target) {
  try {
    const loggedUser = await db.collection('sessions').findOne({sessionToken: target});
    const userName = await db.collection('users').findOne({_id: loggedUser.userID});
    return userName._id;

  } catch (error) {
    console.error(error, '!erro! buscando usuario logado no bd');
    return res.sendStatus(500);
  }
}

export async function createTransaction(req, res) {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    const userID = await getUserByToken(token);
        
    const transaction = {
      ...req.body,
      date: dayjs().format("DD/MM"),
      userID: userID
    };
        
    const newTransactionPromise = await db.collection('transactions').insertOne(transaction);
    
    return res.sendStatus(201);

  } catch (error) {
    console.error(error, '!erro! inserindo transação no bd');
    return res.sendStatus(500);
  }
}