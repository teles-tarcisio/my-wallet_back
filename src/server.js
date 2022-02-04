import express from 'express';
import cors from 'cors';
import mainRouter from './routes/index.js';


const server = express();
server.use(express.json());
server.use(cors());

server.use(mainRouter);



const serverPort = 5000;
server.listen(serverPort, () => {
  console.log('server running, http://localhost:' + serverPort);
});