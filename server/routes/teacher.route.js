const express=require('express')
const routes=express.Router()
const { historyStudent,evaluateStudent,getStudents } = require('../controllers/teacher.controller')

routes.get('/history/:id',historyStudent)
routes.post('/evaluate/:id',evaluateStudent)
routes.get('/getStudents/:teacherId',getStudents)

module.exports=routes