import {Admission} from "../models/admissionModel.js"


export const getAllAdmissions = async (req, res) => {
    try {
        const admissions = await Admission.find({});
        res.status(200).json({ data: admissions });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};


export const createAdmission = async (req, res) => {
    try {
        const { aadhaar, name, fathersName, address,fees, mobileNumber, course } = req.body;

       
        if (!aadhaar || !name || !fathersName|| !fees || !address || !mobileNumber || !course) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const existingAdmission = await Admission.findOne({ aadhaar });
        if (existingAdmission) {
            return res.status(400).json({ error: "Admission with this Aadhaar already exists." });
        }

        const newAdmission = new Admission({
            aadhaar,
            name,
            fathersName,
            address,
            fees,
            mobileNumber,
            course
        });

        await newAdmission.save();

        res.status(201).json({ message: "Admission created successfully.", data: newAdmission });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};