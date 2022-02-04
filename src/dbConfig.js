import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
const dbConnection = await mongoClient.connect();
const db = dbConnection.db('my_wallet');

export default db;