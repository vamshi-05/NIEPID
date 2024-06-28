const express=require('express')
const routes=express.Router()
const { viewDetails,viewEvaluation } =require( '../controllers/student.controller')

routes.get('/viewDetail',viewDetails)
routes.get('/viewEvaluation',viewEvaluation)

module.exports=routes