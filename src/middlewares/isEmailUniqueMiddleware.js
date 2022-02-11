import db from '../dbConfig.js';

export default async function isEmailUniqueMiddleware(req, res, next) {
  try {
    const newUserData = req.body;

    const emailAlreadyExists = await db.collection('users').findOne( { email: newUserData.email});
        
    if (emailAlreadyExists) {
      res.status(409).send('Já existe usuário cadastrado com este e-mail');
      return;
    }
    
    next();    

  } catch (error) {
    console.log(error, '!erro! buscando email único no bd');
    res.sendStatus(500);
  }
}