// const loginModel=require('../model/login.model')
 const userModel=require('../models/user.model')
 const teacherModel=require('../models/teacher.model')
 const studentModel=require('../models/student.model')
 const studentDetailsModel=require('../models/studentDetails.model')
 const classModel=require('../models/class.model')


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
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const viewTeacher=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

module.exports={
    registerStudent,
    registerTeacher,
    viewStudent,
    viewTeacher
}
