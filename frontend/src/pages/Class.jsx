import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Class() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [UInfo, setUInfo] = useState(null);

  useEffect(() => {
    

    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000/class",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          toast.error(data.message);
          navigate("/");
        } else {
        }
      }
    };
    verifyUser();
    // GetUInfo();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    
    getDetails();
  }, []);
  async function getDetails() {
    try {
      await axios
        .post("http://localhost:4000/getassignedstudents",{},{
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.status) setStudents(response.data.data);
          else {
          }
        });
    } catch (error) {
      toast.error(error);
    }
  }


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!selectedFile) {
        toast.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);
      let response;
      response = await axios.post(
        "http://localhost:4000/addstudents",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response);

      if (!response.success) {
        toast.error(response.message);
        // navigate("/");
      } else {
        toast.success("File uploaded successfully");
        getDetails();

      }
    } catch (error) {
      toast.error("Error uploading file");
      alert(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleUpload}>
          <div className="mb-3">
            <label htmlFor="professordata">
              <strong>Upload Students Data xlsx file</strong>
            </label>
            <input type="file" accept=".xlsx" onChange={handleFileChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

      {/* TODO seperate this registration and students into a block,design a list to show students */}

      {students.length > 0 && (
        <>
          <div>Your Students</div>

          {students.map((student) => {
            return (
              <div key={student}>
                <p>{student}</p>
                <a href={`eval/${student}`}>eval</a><br />
                <a href={`hist/${student}`}>hist</a>
              </div>
            );
          })}
        </>
        // TODO come good looking shit
      )}
    </div>
  );
}

export default Class;
