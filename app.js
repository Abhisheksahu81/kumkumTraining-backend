import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { admissionRoute } from './routes/admissionRoute.js';
import { certificateRoute } from './routes/certificateRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
connectDB();

// CORS configuration to allow all origins
app.use(cors({
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
  allowedHeaders: 'Content-Type,Authorization' // Specify allowed headers
}));

app.use(express.json());

app.use('/admission', admissionRoute);
app.use('/certificate', certificateRoute);

app.get('/', async (req, res) => {
  res.json({ "Message": "Running Successfully." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
