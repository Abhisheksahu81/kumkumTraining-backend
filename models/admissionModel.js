import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
  },
  courseName: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
  },
  aadhar: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  phoneNumber: {
    type: String,
  },
  session: {
    type: String,
  },
  courseDuration: {
    type: String,
  },
  grade: {
    type: String,
  },
  percentage: {
    type: Number,
  },
  dateOfIssue: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'dateOfIssue'
  }
});

export const Admission = mongoose.model('Admission', admissionSchema);
