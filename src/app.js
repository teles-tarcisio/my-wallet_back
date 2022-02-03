import express from 'express';
import cors from 'cors';
import { createUser } from './controllers/usersController.js';

const server = express();
server.use(express.json());
server.use(cors);

server.post('/users', createUser);





const serverPort = 5000;
server.listen(serverPort, () => {
  console.log('server running, http://localhost:' + serverPort);
});