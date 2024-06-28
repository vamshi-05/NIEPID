const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    teacherId:{
        type:String,
        unique:true,
        required:true
    },
    teacherName:{
        type:String,
        required:true,
    },
    teacherMNo:{type:Number},
    password:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    classId:{
        type:[String],
        required:true
    }
})
module.export = mongoose.model('teacher',teacherSchema)