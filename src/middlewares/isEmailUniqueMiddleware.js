import db from '../dbConfig.js';

export default async function isEmailUniqueMiddleware(req, res, next) {
  try {
    const newUserData = req.body;

    const emailAlreadyExists = await db.collection('users').findOne( { email: newUserData.email});
        
    if (emailAlreadyExists) {
      return res.status(409).send('Já existe usuário cadastrado com este e-mail');
    }
    
    next();    

  } catch (error) {
    console.error(error, '!erro! buscando email único no bd');
    return res.sendStatus(500);
  }
}