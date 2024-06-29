const express=require('express')
const routes=express.Router()
const { registerStudent,registerTeacher,viewStudent,viewTeacher,downloadExcel } = require('../controllers/admin.controller')

routes.post('/registerStudent',registerStudent);
routes.post('/registerTeacher',registerTeacher);
routes.get('/viewStudent',viewStudent);
routes.get('/viewTeacher',viewTeacher);
routes.get('/download',downloadExcel);


module.exports=routes