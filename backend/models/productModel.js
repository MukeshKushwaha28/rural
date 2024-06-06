import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
   
    photo: {
      data: Buffer,
      contentType: String,
    },
   district:{
       type:String,
       required:true,
   }
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
