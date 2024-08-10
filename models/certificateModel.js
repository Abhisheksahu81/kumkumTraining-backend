import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  dateOfIssue: {
    type: Date,
    required: true
  },
  admissionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admission',
    required: true
  }
}, {
  timestamps: true
});

export const Certificate = mongoose.model('Certificate', certificateSchema);


