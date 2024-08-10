import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { admissionRoute } from './routes/admissionRoute.js';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/admission' , admissionRoute)

app.get('/test', async(req, res)=>{
   res.json({"Message ": "Running Successfully."});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
