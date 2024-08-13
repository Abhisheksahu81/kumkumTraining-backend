import { createAdmission, getAllAdmissions } from '../controllers/admissionController.js';
import express from 'express'

const router = express.Router();

router.post('/create' , createAdmission);
router.get('/get', getAllAdmissions);

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

