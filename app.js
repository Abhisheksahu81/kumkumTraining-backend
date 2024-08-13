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

// Route to handle both POST (Create) and PUT (Update) operations
router.route('/admissions/:id?')
  .post(async (req, res) => {
    try {
      // Create a new admission document from the request body
      const newAdmission = new Admission(req.body);

      // Save the document to the database
      const savedAdmission = await newAdmission.save();

      // Respond with the saved document
      res.status(201).json(savedAdmission);
    } catch (error) {
      // Handle any errors that occur during the save process
      res.status(400).json({ message: 'Error creating admission', error });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // Find the admission by ID and update it with the data from the request body
      const updatedAdmission = await Admission.findByIdAndUpdate(id, updateData, {
        new: true, // Returns the updated document
        runValidators: true, // Validates the data before updating
      });

      if (!updatedAdmission) {
        return res.status(404).json({ message: 'Admission not found' });
      }

      res.status(200).json(updatedAdmission);
    } catch (error) {
      res.status(500).json({ message: 'Error updating admission', error });
    }
  });



app.get('/', async (req, res) => {
  res.json({ "Message": "Running Successfully." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
