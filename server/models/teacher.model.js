const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        unique: true,
        required: true
    },
    teacherName: {
        type: String,
        required: true,
    },
    teacherMNo: { type: Number },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    classId: {
        type: [String],
        required: true
    }
})
module.exports = mongoose.model('teacher', teacherSchema)