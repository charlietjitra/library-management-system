import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoutes from './routes/book.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URL

app.use(express.json());
app.use(cors());
app.use('/', bookRoutes);

mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB", mongoURI))
.catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})