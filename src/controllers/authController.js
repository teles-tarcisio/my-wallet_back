import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import db from '../dbConfig.js';

export async function createUser(req, res) {
  const user = req.body;

  const hashedPassword = bcrypt.hashSync(user.password, 10);

  const newUserPromise = await db.collection('users').insertOne({ ...user, password: hashedPassword });
  console.log(newUserPromise, 'falta try/catch?');
  res.sendStatus(201);  
}