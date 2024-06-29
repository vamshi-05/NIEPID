// const loginModel=require('../model/login.model')
 const userModel=require('../models/user.model')
 const teacherModel=require('../models/teacher.model')
 const studentModel=require('../models/student.model')
 const studentDetailsModel=require('../models/studentDetails.model')
 const classModel=require('../models/class.model')
const path = require('path')

const jwt=require('jsonwebtoken')


const registerStudent=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const registerTeacher=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const viewStudent=async(req,res)=>{
    try{
        const students = await studentModel.find({})
        // console.log(students)
        if(students){
            res.status(200).json({status:"success",data:students})
        }
        else{
            res.status(405).json({status:"success",data:[]})
        }
    }
    catch(error){
        res.status(404).json("Error")
    }
}

const viewTeacher=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const downloadExcel= async(req, res) => {
    console.log("hii")
    const file = await path.join(__dirname, '..','samplesheets', 'sampleDataTeacher.xlsx'); // Adjust the path to your file
    console.log("File path:", file); // Log the file path for debugging
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Set the CORS header for this route
    res.download(file, (err) => {
    if (err) {
        console.error("File not found:", err);
        res.status(404).send("File not found");
    }
    });
};

module.exports={
    registerStudent,
    registerTeacher,
    viewStudent,
    viewTeacher,
    downloadExcel
}
