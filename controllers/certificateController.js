// controllers/certificateController.js
import {Certificate} from '../models/certificateModel.js';
import {Admission} from '../models/admissionModel.js';

export const createCertificate = async (req, res) => {
    try {
        const { name, courseName, grade, percentage, session, duration, dateOfIssue, admissionId } = req.body;

        
        if (!name || !courseName || !grade || !percentage || !session || !duration || !dateOfIssue || !admissionId) {
            return res.status(400).json({ error: "All fields are required." });
        }

        
        const admission = await Admission.findById(admissionId);
        if (!admission) {
            return res.status(400).json({ error: "Invalid admission ID." });
        }

        
        const newCertificate = new Certificate({
            name,
            courseName,
            grade,
            percentage,
            session,
            duration,
            dateOfIssue,
            admissionId
        });
       
        await newCertificate.save();

        res.status(201).json({ message: "Certificate created successfully.", data: newCertificate });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};
