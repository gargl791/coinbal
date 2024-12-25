import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '../.env' });

const app: Application = express();
const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI;

if (!dbUri) {
  throw new Error('DB_URI missing in .env file.');
}

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js backend!');
});

mongoose.connect(dbUri)
  .then(() => {
    console.log('Successfully connected to MongoDB database');
  })
  .catch((err: Error) => {
    console.error('Error in connecting to MongoDB database', err);
  });

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
