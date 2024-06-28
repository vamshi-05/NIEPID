const express=require('express')
const routes=express.Router()
const { registerStudent,registerTeacher,viewStudent,viewTeacher } = require('../controllers/admin.controller')

routes.post('/registerStudent',registerStudent);
routes.post('/registerTeacher',registerTeacher);
routes.get('/viewStudent',viewStudent);
routes.get('/viewTeacher',viewTeacher);


module.exports=routes