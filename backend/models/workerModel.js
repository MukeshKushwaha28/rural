import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    fname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    district:{
      type: String,
      required: true,
    },

    experience:{
      type: Number,
      required: true,
    },

    DOB:{
      type: String,
      required: true,
    },

    education:{
      type: String,
      required: true,
    },

    skill:{
      type: String,
      required: true,
    },
    Scertificate: {
      data: Buffer,
      contentType: String,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("worker", workerSchema);
