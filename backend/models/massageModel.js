import mongoose from "mongoose";

const massage1Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
   
    time:{
        type:String,
        required: true,
        unique: true,
    },
    district: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    catagory: {
        type: String,
        required: true,
      },
      email:{
        type:String,
        required:true,
      },

    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("massage1", massage1Schema);
