const Mongoose = require('mongoose')
const User = new Mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        unique:true,
        required:true,
        type:String
    },
    role:{
        type:String,
        required:true,
        enum:["teacher","student","admin","principal"]
    }
})
module.exports=Mongoose.model('user',User)