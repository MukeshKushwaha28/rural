import workerModel from "../models/workerModel.js";
import fs from 'fs'
 export const workerRegistrationContoller = async(req,res)=>{
    try {
        const { name, fname, email, phone, address,district, experience,DOB,education,skill} =
          req.fields;
        const { Scertificate } = req.files;
        console.log(name);
        //alidation
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Required" });
          case !fname:
            return res.status(500).send({ error: "fname is Required" });
          case !email:
            return res.status(500).send({ error: "email is Required" });
          case !phone:
            return res.status(500).send({ error: "phone is Required" });
          case !district:
            return res.status(500).send({ error: "Quantity is Required" });
            case !address:
            return res.status(500).send({ error: "address is Required" });
            case !experience:
            return res.status(500).send({ error: "experience is Required" });
            case !DOB:
            return res.status(500).send({ error: "DOB is Required" });
            case !experience:
            return res.status(500).send({ error: "experience is Required" });
            case !education:
            return res.status(500).send({ error: "education is Required" });
            case !skill:
            return res.status(500).send({ error: "skill is Required" });
          case Scertificate && Scertificate.size > 1000000:
            return res
              .status(500)
              .send({ error: "Scertificate is Required and should be less then 1mb" });
        }
    
        const workers = new workerModel({ ...req.fields, });
        if (Scertificate) {
            workers.Scertificate.data = fs.readFileSync(Scertificate.path);
            workers.Scertificate.contentType = Scertificate.type;
        }
        await workers.save();
        res.status(201).send({
          success: true,
          message: "Product Created Successfully",
          workers,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in crearing worker",
        });
      }
}


export const getAllWorkers = async(req,res)=>{
     try{
          const workers = await workerModel.find({}).select("-Scertificate").sort({ createdAt: -1 });
          if(workers){
             res.status(201).send({
                success: true,
                message: " Successfully getting all workers",
                workers,
             })
          }
     }catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in getting worker",
        });
    }
}