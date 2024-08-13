const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
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
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
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
    createdAt: 'createdAt',  // Automatically set the creation timestamp
    updatedAt: 'dateOfIssue'  // Automatically update this field on document update
  }
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
