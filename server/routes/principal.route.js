const express=require('express')
const routes=express.Router()
const { viewStudent,viewTeacher } = require('../controllers/admin.controller')

routes.get('/viewStudent',viewStudent);
routes.get('/viewTeacher',viewTeacher);

module.exports=routes