const User=require("../models/userModel");

const createUser=(req,res)=>{
 const email=req.body.email;
 const findUser=User.findOne({email:email});
 const newUser=User.create(req.body);
 res.json(newUser);
};

module.exports={createUser};