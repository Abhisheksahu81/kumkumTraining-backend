import express from 'express'
import { createCertificate, getCertificatesByNameAndAadhaar } from '../controllers/certificateController.js';

const router = express.Router();
router.post("/create", createCertificate);
router.get("/search" , getCertificatesByNameAndAadhaar);

export {router as certificateRoute};
