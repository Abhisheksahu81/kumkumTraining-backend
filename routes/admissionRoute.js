import { createAdmission, getAllAdmissions } from '../controllers/admissionController.js';
import express from 'express'

const router = express.Router();

router.post('/create' , createAdmission);
router.get('/get', getAllAdmissions);


export {router as admissionRoute}

