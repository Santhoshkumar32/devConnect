 const express = require("express")
 const connectDB = require ('./configure/database')
 const User= require("./models/user")

 const app= express();
 const PORT= 5000;


 app.post("/signup", async (req,res)=>{

   //creating a new instance of a user modal
   const user= new User({
      firstName: "Naveen",
      lastName: "Kumar",
      emailId: "naveen1803@gmail.com",
      password: "sdfiowef"
   })
   
  try{
      await user.save();
      res.send("User added succesfully")
  }
   catch(err) {
   res.status(400).send("Error saving the user" + err.message)
   }
 })
 
 connectDB().then( ()=> { console.log("DB connected")
   app.listen(5000, (error)=>{
     
      if(error)
      {
          console.log("There is an issue with server running")
      }
      else{
          console.log(`Server started at ${PORT}`)
      }
   })
  }).catch((err)=>{console.log("DB connection failed: ",err)});