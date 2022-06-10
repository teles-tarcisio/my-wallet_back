import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import db from '../dbConfig.js';

export async function createNewUser(req, res) {
  try {
    const user = req.body;
    const hashedPassword = await bcrypt.hash(user.password, 12);
    await db.collection('users').insertOne({
      ...user,
      password: hashedPassword,
    });
    return res.sendStatus(201);
  } catch (error) {
    console.error(error, '!erro! inserindo novo usuário no bd');
    return res.sendStatus(500);
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const targetUser = await db.collection('users').findOne({ email });
    if (!targetUser) {
      return res.status(404).send('Não existe cadastro com o e-mail informado.');
    }

    const passwordMatch = await bcrypt.compare(password, targetUser.password);
    if (!passwordMatch) {
      return res.status(403).send('Senha incorreta. Verifique a senha fornecida.');
    }

    if (targetUser && passwordMatch) {
      const sessionToken = uuidv4();
      await db.collection('sessions').insertOne({
        sessionToken,
        userID: targetUser._id,
      });
      return res.send({
        name: targetUser.name,
        token: sessionToken,
      });
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}