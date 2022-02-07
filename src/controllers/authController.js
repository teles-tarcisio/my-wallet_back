import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import db from '../dbConfig.js';

export async function createNewUser(req, res) {
  try {
    const user = req.body;
    const hashedPassword = bcrypt.hashSync(user.password, 10);
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

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    console.log('login: ', req.body);

    const targetUser = await db.collection('users').findOne({ email });
    console.log('found? ', targetUser);
    if (!targetUser) {
      res.status(404).send('Não existe cadastro com o e-mail informado.');
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, targetUser.password);
    console.log('bcrypt: ', passwordMatch);
    if (!passwordMatch) {
      res.status(403).send('Senha incorreta. Verifique a senha fornecida.');
      return;
    }

    if (targetUser && passwordMatch) {
      const sessionToken = uuidv4();
      await db.collection('sessions').insertOne({ sessionToken, userID: targetUser._id });

      console.log('sucesso, devolver username+token: ', targetUser.name, sessionToken);
      res.send({name: targetUser.name, token: sessionToken});
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}