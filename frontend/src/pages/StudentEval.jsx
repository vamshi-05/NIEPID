import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import getCurrentUser from "../helpers/CurrentUser";
import { toast } from 'react-toastify'
import { AreaEnums } from "../constants/enums/AreaEnums" ;
import { AnswerEnums } from "../constants/enums/AnswerEnums" ;

function StudentEval(params) {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const navigate = useNavigate();
  const username = pathname.split("/")[pathname.split("/").length - 1];

  const [UInfo, setUInfo] = useState(null);

  const [reports, setReports] = useState([]);
  const [extraQuestion, setExtraQuestion] = useState("");
  const [extraAnswer, setExtraAnswer] = useState("");
  const [extraArea, setExtraArea] = useState("");

  const [Submission, setSubmission] = useState(null);

  const [User,setUser] = useState();

  useEffect(async()=>{
    // await getCurrentUser();
    await getStudentBasicDetails();
  },[])

  async function getStudentBasicDetails() {
    await axios
      .post(
        "http://localhost:4000/getstudentbasicdetails",
        { username: username },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (!res.data.status) {
          navigate("/class");
        } else {
          setUInfo(res.data.data);
        }
      });
  }
  async function SubmitEvaluation(check) {
    reports.map(async (report) => {
      if (report._id == Submission) {
        if(report.checked){
          toast.error("this report has already been evaluated")
          return 
        }
        await axios
          .post(
            "http://localhost:4000/studentevaluation",
            {
              studentusername: report.student,
              termYear: report.termYear,
              QAEvaluations: report.tests,
              checked: check,
              group:report.group
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
  }
  async function getStudentEvaluation() {
    await axios
      .post(
        "http://localhost:4000/getstudentevaluation",
        { username: username },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.data);
          setReports(res.data.data);
        } else console.log("error fetch details");
      });
  }

  function addQuestion(e) {
    e.preventDefault();
    if (extraAnswer == "" || extraArea == "" || extraArea == "") {
      return;
    }
    reports.map((report) => {
      if (report._id == Submission) {
        if(report.checked){
          toast.error("this report has already been evaluated")
          return 
        }
        report.tests.push({
          question: { _id:generateRandomId(), question: extraQuestion, area: extraArea },
          answer: extraAnswer,
        });
        return;
      }
    });
    setExtraAnswer("");
    setExtraArea("");
    setExtraQuestion("");
  }

  useEffect(() => {
    getStudentEvaluation();
  }, []);

  const handleQuestionChange = (rid,tid,value) => {
    const reps = reports
    reps.map((report) => {
      if(report._id == rid){
        report.tests.map(test=>{
          if(test._id == tid){
              test.question.question = value
          }
        });
      }
    })  
    setReports([...reps])
  }

  
  const handleAnswerChange = (rid,tid,value) => {
    const reps = reports
    reps.map((report) => {
      if(report._id == rid){
        report.tests.map(test=>{
          if(test._id == tid){
              test.answer= value
          }
        });
      }
    })  
    setReports([...reps])
  }

  const handleAreaChange = (rid,tid,value) => {
    const reps = reports
    reps.map((report) => {
      if(report._id == rid){
        report.tests.map(test=>{
          if(test._id == tid){
              test.question.area = value
          }
        });
      }
    })  
    setReports([...reps])
  }

  return (
    <div>
      {/* TODO upgrade designs of input fields and other stuff  */}
      {reports.length > 0 && (
        <>
          {reports.map((report, i) => {
            return (
              <div key={report._id}>
                {Submission == report._id ? (
                  <div key={report._id}>
                    <div>
                      <h2
                        onClick={() => {
                          setSubmission(
                            Submission == report._id ? null : report._id
                          );
                          setExtraAnswer("");
                          setExtraArea("");
                          setExtraQuestion("");
                        }}
                      >
                        report {i + 1}
                      </h2>
                      <h1>{report.termYear}</h1>
                      <h4>{report.group}</h4>

                      {report.tests &&
                        report.tests.map((test) => {
                          return (
                            <div key={test.q}>
                              <input type="text" value={test.question.question} onChange={(e)=>{handleQuestionChange(report._id,test._id,e.target.value)}} />
                              <select
                              id="areas"
                              value={test.question.area}
                              onChange={(e) => handleAreaChange(report._id,test._id,e.target.value)}
                            >
                              <option value="">--Please choose an option--</option>
                            {AreaEnums.map((a)=>{
                              if(a!="")
                              return <option value={`${a}`}>{a}</option>
                            })}
                            </select>
                                  <select
                              id="answers"
                              value={test.answer}
                              onChange={(e) => handleAnswerChange(report._id,test._id,e.target.value)}
                            >
                              <option value="">--Please choose an option--</option>
                              {AnswerEnums.map((a)=>{
                              if(a!="")
                              return <option value={`${a}`}>{a}</option>
                            })}
                            </select>
                            </div>
                          );
                        })}

                      <input
                        type="text"
                        value={extraQuestion}
                        onChange={(e) => {
                          setExtraQuestion(e.target.value);
                        }}
                      />
                      <select
                        id="area"
                        value={extraArea}
                        onChange={(e) => {
                          setExtraArea(e.target.value);
                        }}
                      >
                        <option value="">--Please choose an option--</option>
                        {AreaEnums.map((a)=>{
                              if(a!="")
                              return <option value={`${a}`}>{a}</option>
                            })}
                      </select>
                      <select
                        id="answers"
                        value={extraAnswer}
                        onChange={(e) => setExtraAnswer(e.target.value)}
                      >
                        <option value="">--Please choose an option--</option>
                        {AnswerEnums.map((a)=>{
                              if(a!="")
                              return <option value={`${a}`}>{a}</option>
                            })}
                      </select>
                      <button onClick={addQuestion}>Add Question</button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          SubmitEvaluation(false);
                        }}
                      >
                        {" "}
                        Save the progress{" "}
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          SubmitEvaluation(true);
                        }}
                      >
                        {" "}
                        Submit and proceed to evaluation{" "}
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h5
                      onClick={() => {
                        setSubmission(
                          Submission == report._id ? null : report._id
                        );
                        setExtraAnswer("");
                        setExtraArea("");
                        setExtraQuestion("");
                      }}
                    >
                      {" "}
                       Report for the{" "}
                       {report.termYear%10 == 0 && <> Entry Level of </> }
                       {report.termYear%10 == 1 && <> First Level of </> }
                       {report.termYear%10 == 2 && <> Second Level of </> }
                       {report.termYear%10 == 3 && <> Third Level of </> }
                       {report.termYear/10 == 1 && <> First Year </> }
                       {report.termYear/10 == 2 && <> Second Year </> }
                       {report.termYear/10 == 3 && <> Third Year</> }
                        {report.checked ? <> Already Submitted </> : <> Not Yet Submitted </>}
                       
                    </h5>
                  </>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
export default StudentEval;


function generateRandomId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  // Add a timestamp to ensure uniqueness
  const timestamp = new Date().getTime().toString();

  for (let i = 0; i < length; i++) {
    // Generate a random character from the characters string
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  // Append the timestamp to the random string
  result += timestamp;

  return result;
}
