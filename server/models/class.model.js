const mongoose = require('mongoose')
const Class= new mongoose.Schema({
    classId:{
        type:String,
        required:true,
        unique:true
    },
    teacher:{type:Object,require:true},
    section:{
        type:String,
        enum:["preprimary"]
    },
    year:{
        type:String,
        enum:["Entery","I","II","III"],
        required:true
    },
    student:[String]
})
module.exports=mongoose.model('class',Class)