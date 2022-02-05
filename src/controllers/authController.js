import bcrypt from 'bcrypt';
import db from '../dbConfig.js';

export async function createNewUser(req, res) {
  const user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  try {
    const newUserInsertion = await db.collection('users').insertOne(
      {
        ...user,
        password: hashedPassword
      }
    );
    console.log('newUserInsertion-->', newUserInsertion);
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log(error, '!erro! inserindo no bd');
    res.sendStatus(500);
  }  
}