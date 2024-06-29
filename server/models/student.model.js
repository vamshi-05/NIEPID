const mongoose = require('mongoose')
const report = new mongoose.Schema({
    term: {
        type: String,
        required: true,
        // unique: true
    },
    /*
    year:{
        type : String,
        required: true
    }
    */
    comment: {
        type: String,
        default: 'No Report Needed'
    }
})
const StudentReport = new mongoose.Schema({
    regNo: {
        type: String,
        required: true,
        unique: true
    },
    classId: {
        type: String,
        required: true
    },
    personalQA: [{
        question: String,
        answer: String
    }],
    socialQA: [{
        question: String,
        answer: String
    }],
    academicQA: [{
        question: String,
        answer: String
    }],
    occupationalQA: [{
        question: String,
        answer: String
    }],
    recreationalQA: [{
        question: String,
        answer: String
    }],
    report: report
})

module.export = mongoose.model('student', StudentReport)