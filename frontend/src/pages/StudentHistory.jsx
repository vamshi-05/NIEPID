import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GroupEnums } from '../constants/enums/GroupEnums';
import { TermYearEnums } from '../constants/enums/TermYearEnums';


function StudentHistory(params) {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const navigate = useNavigate();
  const username  = pathname.split("/")[pathname.split("/").length - 1]

  const [reports,setReports] = useState();

  const [yearGraphDatas,setYearGraphDatas] =useState();

  useEffect(async()=>{
    await getAllReports()
  },[])

  useEffect(()=>{

    
  },[reports])
  

    async function getAllReports(){
        await axios.post('http://localhost:4000/getallreports',{username:username},{
          withCredentials:true
        }).then(res=>{
          setReports(res.data.data)
          console.log(res.data.data)
        })
    }
  return (
    <div>

    </div>
  )
}

export default StudentHistory