// const loginModel=require('../model/login.model')
// const userModel=require('../model/user.model')
const userModel=require('../models/user.model')
const teacherModel=require('../models/teacher.model')
const studentModel=require('../models/student.model')
const studentDetailsModel=require('../models/studentDetails.model')
const classModel=require('../models/class.model')


const jwt=require('jsonwebtoken')


const checkUser=async(req,res)=>{
    try{
        console.log(req.body)
        const {id,password}=req.body;

        const user=await userModel.findOne({"id" : id})
        // const username=user.username
        console.log(user)
        if(user && user.password===password){
            const userId=user.id
            const role=user.role
            console.log(user)
                
            jwt.sign({user},"secret",(err,token)=>{
                if(!err)
                    res.json({status : "success",token,role,userId})
                else
                    res.json("jwt error")
            })
        }
        else{
            res.json("invalid credentials")
        }

    }
    catch(error){
        res.json("error ")
    }
}


const saveUser=async(req,res)=>{
    const user=req.body
    console.log(user)
    try{
        const existingUser=await userModel.findOne({"email" : user.email})
        console.log("hello")
        if(existingUser){
            res.status(409).send({"message" : "user already exists !"})
        }
        else{
            await userModel.create(user)
           
            res.status(200).send("true")
        }
    }
    catch(error){
        res.status(404).send("false")
    }
}


module.exports={
    checkUser,
    saveUser
}
