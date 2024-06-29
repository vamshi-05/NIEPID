// const loginModel=require('../model/login.model')
// const userModel=require('../model/user.model')
const userModel=require('../models/user.model')
const teacherModel=require('../models/teacher.model')
const studentModel=require('../models/student.model')
const studentDetailsModel=require('../models/studentDetails.model')
const classModel=require('../models/class.model')


const jwt=require('jsonwebtoken')


const viewEvaluation=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const viewDetails=async(req,res)=>{
    try {
        const userId = req.params.id;
        //console.log(userId)
        const details = await studentDetailsModel.findOne({regnNo : userId});
        res.status(200).json({status : "success",details});
      } catch (error) {
        res.json(" error");
      }
}




module.exports={
    viewDetails,
    viewEvaluation
}
