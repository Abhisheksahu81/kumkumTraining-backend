import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  aadhaar: {
    type: String,
    required: true,
    unique: true,
    minlength: 12,
    maxlength: 12
  },
  name: {
    type: String,
    required: true
  },
  fathersName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  fees : {
    type : Number,
    required :true,
  },
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  course: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Admission = mongoose.model('Admission', admissionSchema);

