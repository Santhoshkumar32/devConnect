const mongoose =require('mongoose')

const connectDB= async () =>{
    await mongoose.connect("mongodb+srv://santhoshk1836:sRCvn6VdQUD9Ld3Y@cluster0.1swyo21.mongodb.net/devConnect")
}

module.exports =connectDB;