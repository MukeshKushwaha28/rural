import massage1Model from "../models/massageModel.js";



export const massageController = async (req, res) => {
    try {
      const { name,time, phone, address, district,email,catagory} = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }

      if (!time) {
        return res.send({ error: "time is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
  
      if (!district) {
        return res.send({ message: "district no is Required" });
      }

      if (!address) {
        return res.send({ message: "Address is Required" });
      }

      if (!catagory) {
        return res.send({ message: "catagory is Required" });
      }
      
      
      //register user
      
      //save
      const Massage = await new massage1Model({
        name,
        email,
        time,
        phone,
        address,
        catagory,
        district,
        
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        Massage,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Errro in Registeration",
        error,
      });
    }
  };

  export const getAll = async(req,res)=>{
       try{

           const Massage = await massage1Model.find({role:0}).sort({ createdAt: -1 });

           if(Massage){
            res.status(201).send({
                success: true,
                message: "User Register Successfully",
                Massage,
              });
           }
       }catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Errro in Get all massage",
          error,
        });
       }
  }

  export const updateController= async(req,res)=>{
        try{
             const {id} = req.body;
             const Massage = await massage1Model.findByIdAndUpdate(
                    id,
                  {role:1},
                  {new:true},
            )

            if(Massage){
                res.status(201).send({
                  success: true,
                  message: "User Register Successfully",
                  Massage,
                })
            }
        }catch(error){
          res.status(500).send({
            success: false,
            message: "Errro in Get all massage",
            error,
          });
        }
  }