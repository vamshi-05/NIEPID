const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
const cors=require('cors')
app.use(cors())

//Routes
 const studentRoutes=require('./routes/student.route')
 const adminRoutes=require('./routes/admin.route')
 const teacherRoutes=require('./routes/teacher.route')
 const loginRoutes=require('./routes/login.route')
 const principleRoutes=require('./routes/principal.route')
 const {verifyToken,isAdmin,isStudent,isTeacher,isPrinciple}=require('./middlewares/authorization')

//mongDB connection
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/niepid")
.then((res)=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)})


 app.use(express.json())
 app.use(express.urlencoded({extended : true}))

// //Routes

app.use('/login',loginRoutes)
app.use('/student',verifyToken,isStudent,studentRoutes)
app.use('/teacher',verifyToken,isTeacher,teacherRoutes)
app.use('/principle',verifyToken,isPrinciple,principleRoutes)
app.use('/admin',verifyToken,isAdmin,adminRoutes)

app.get('/',(req,res)=>{
    res.status(200).send("hello page")
})

//server connection
app.listen(4000,()=>{console.log(`server is listening at port 4000`)})