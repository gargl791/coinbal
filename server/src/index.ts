import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI;

if(!dbUri) {
  throw new Error("DB_URI missing in .env file.")
}

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

mongoose.connect(dbUri)


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
