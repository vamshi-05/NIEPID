// const loginModel=require('../model/login.model')
// const userModel=require('../model/user.model')
const userModel=require('../models/user.model')
const teacherModel=require('../models/teacher.model')
const studentModel=require('../models/student.model')
const studentDetailsModel=require('../models/studentDetails.model')
const classModel=require('../models/class.model')


const jwt=require('jsonwebtoken')


const evaluateStudent=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const historyStudent=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const getStudents = async (req, res) => {
    try {
        const id = req.body
        const teacher = await teacherModel.find({ "teacherId": id })
        const students = await studentModel.find({ "classId": { $in: teacher.classId } })
        if (students) {
            res.json({ status: "success", data: students })
        }
        else {
            res.status(405).send(false)
        }
    }
    catch (error) {
        res.status(404).send(false)
    }
}



module.exports={
    historyStudent,
    getStudents,
    evaluateStudent
}
