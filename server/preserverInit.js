const { default: mongoose } = require("mongoose");
const { questions } = require("./constants/questions/questions");
const { testQuestions } = require("./helper/testQuestions");
const AdminsModel = require("./model/AdminsModel");
const QuestionModel = require("./model/QuestionModel");



module.exports.preserverInit = async()=>{
  createAdmin();
  Object.keys(questions).forEach((question)=>{
    AddQuestions(question,questions[question]);
  })
  // console.log(await testQuestions())

    
}

async function createAdmin(){
    await AdminsModel.findOneAndUpdate(
      {username:"admin"},  // query
      {username:"admin"},  // update
      { upsert: true, new: true, setDefaultsOnInsert: true }  // options
  );
  }


async function AddQuestions(question,area){
        await QuestionModel.findOneAndUpdate({question:question,area:area},{question:question,area:area},{ upsert: true, new: true, setDefaultsOnInsert: true }).then(res=>{console.log("q created")})
          // options

}
