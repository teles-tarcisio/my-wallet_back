import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import mainRouter from './routes/index.js';


dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(mainRouter);



server.listen(process.env.PORT, () => {
  console.log('server running, http://localhost:' + process.env.PORT);
});