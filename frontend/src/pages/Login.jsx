import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {  toast } from "react-toastify";
import niepidLogo from './th.jpeg';

function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ id: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const id=values.id
      const password=values.password
      console.log(id,password)
      const  response  = await axios.post(
        "http://localhost:4000/login",
        {
         
            id: id,
            password: password
        }
       
      );
      if (response.data.status==="success") {
        const data=response.data
        console.log("hjb")
        console.log(response);
        console.log(data.role);
       
        localStorage.setItem("role",data.role);
        localStorage.setItem("token",data.token);
        if(data.role==="admin"){
          navigate("/admin");
          return;
        }
        else if(data.role==="teacher"){
          navigate("/teacher");
          return;
        }
        else if(data.role==="student"){
          navigate("/student");
          return;
        }
        else {
          navigate("/principle");
          return;
        }
      }
      else{
          generateError("Invalid Credentials");
          return null;
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  
  return (
    <div>
      <header style={headerStyles.header}>
        <h1 style={headerStyles.title}>Welcome to NIEPID</h1>
      </header>
      <div style={styles.container}>
        <div style={styles.infoContainer}>
          <img src={niepidLogo} alt="NIEPID Logo" style={styles.logo} />
          <h1 style={styles.instituteName}>
            NATIONAL INSTITUTE FOR THE EMPOWERMENT OF PERSONS WITH INTELLECTUAL DISABILITIES (DIVYANGJAN)
          </h1>
          <h2 style={styles.subTitle}>Formerly National Institute for the Mentally Handicapped</h2>
          <p style={styles.department}>Department of Empowerment of Persons with Disabilities (Divyangjan), MSJ&E, Govt of India</p>
          <p style={styles.address}>Manovikas Nagar, Secunderabad-500009, T.S.</p>
          <p style={styles.contact}>Ph.No. 091 40 27751741-45. Fax No. 091 40 27750198</p>
          <p style={styles.tollFree}>24/7 Toll Free Helpline Number - 1800 572 6422</p>
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.h2}>Login to your Account</h2>
          <form onSubmit={(e) => handleSubmit(e)} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="id" style={styles.label}>id</label>
              <input
                type="text"
                name="id"
                placeholder="id"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Submit</button>
            <span style={styles.span}>
              Don't have an account? <Link to="/register" style={styles.link}>Register</Link>
            </span>
          </form>
        </div>
      </div>
      <footer style={footerStyles.footer}>
        <p style={footerStyles.text}>© 2024 NIEPID. All rights reserved.</p>
      </footer>
    </div>
  );
}

const headerStyles = {
  header: {
    backgroundColor: '#007bff',
    padding: '1rem',
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  }
};

const footerStyles = {
  footer: {
    backgroundColor: '#007bff',
    padding: '1rem',
    textAlign: 'center',
    color: '#ffffff',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
  }
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f8f9fa',
    padding: '0 5%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  infoContainer: {
    flex: '1',
    textAlign: 'left',
    padding: '2rem',
  },
  logo: {
    width: '150px',
    marginBottom: '1rem',
  },
  instituteName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333333',
  },
  subTitle: {
    fontSize: '1.2rem',
    color: '#555555',
  },
  department: {
    fontSize: '1rem',
    color: '#777777',
  },
  address: {
    fontSize: '1rem',
    color: '#777777',
  },
  contact: {
    fontSize: '1rem',
    color: '#777777',
  },
  tollFree: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555555',
  },
  formContainer: {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    maxWidth: '400px',
  },
  h2: {
    marginBottom: '1.5rem',
    color: '#333333',
    fontSize: '1.8rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1rem',
    color: '#555555',
    marginBottom: '0.5rem',
    textAlign: 'left',
    display: 'block',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  button: {
    padding: '0.8rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  span: {
    display: 'block',
    marginTop: '1rem',
    color: '#555555',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#0056b3',
  },
};

export default Login;
