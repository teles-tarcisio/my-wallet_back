import { MongoClient, MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MongoClient = new MongoClient(process.env.MONGO_URI);
const dbConnection = await MongoClient.connect();
const db = MongoClient.db('my_wallet');

export default db;