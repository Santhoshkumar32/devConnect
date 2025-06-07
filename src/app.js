 const express = require("express")

 const app= express();
 const PORT= 5000;

 app.use("/helo", (req,res)=>{
    res.send("hello guys");
 })

 app.use('/nodemon', (req,res)=>{
    res.send("Nanbargaley nodemonw")
 })
 app.use((req, res)=>{
    res.send("hey everybody");
 })

 
 app.listen(5000, (error)=>{
     
    if(error)
    {
        console.log("There is an issue with server running")
    }
    else{
        console.log(`Server started at ${PORT}`)
    }
 })