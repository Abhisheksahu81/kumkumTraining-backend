import { createAdmission, getAllAdmissions } from '../controllers/admissionController.js';
import express from 'express'

const router = express.Router();

router.post('/create' , createAdmission);
router.get('/get', getAllAdmissions);

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

export {router as admissionRoute}

