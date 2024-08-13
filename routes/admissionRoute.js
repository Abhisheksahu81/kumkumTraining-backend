import { createAdmission, getAllAdmissions } from '../controllers/admissionController.js';
import {Admission} from "../models/admissionModel.js"
import express from 'express'

const router = express.Router();

router.post('/create' , createAdmission);
router.get('/get', getAllAdmissions);

// Route to handle both POST (Create) and PUT (Update) operations
router.route('/admissions/:id?')
  .post(async (req, res) => {
    try {
      const newAdmission = new Admission(req.body);
      const savedAdmission = await newAdmission.save();
      res.status(201).json(savedAdmission);
    } catch (error) {
      console.error('Error creating admission:', error.message);
      res.status(400).json({ message: 'Error creating admission', error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedAdmission = await Admission.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedAdmission) {
        return res.status(404).json({ message: 'Admission not found' });
      }

      res.status(200).json(updatedAdmission);
    } catch (error) {
      console.error('Error updating admission:', error.message);
      res.status(500).json({ message: 'Error updating admission', error: error.message });
    }
  });


  // Route to get admission by aadhar
router.get('/searchByAadhar', async (req, res) => {
  try {
    const { aadhar } = req.query; // Get aadhar from query parameters

    // Find all admissions with the specified aadhar
    const admissions = await Admission.find({ aadhar });

    if (admissions.length === 0) {
      return res.status(404).json({ message: 'No admissions found with the given aadhar.' });
    }

    // Return the found admissions
    res.status(200).json(admissions);
  } catch (error) {
    console.error('Error fetching admissions by aadhar:', error.message);
    res.status(500).json({ message: 'Error fetching admissions', error: error.message });
  }
});


router.delete('/all', async (req, res) => {
  try {
    // Delete all documents from the admission collection
    await Admission.deleteMany({});
    
    res.status(200).json({ message: 'All admissions have been deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete admissions.', error });
  }
});

export {router as admissionRoute}

