import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    try {
      const response = await axios.post(
        "http://localhost:4000/getassignedstudents",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.status) {
        setStudents(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const logOut = () => {
    removeCookie("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div style={styles.container}>
        <header style={styles.header}>
          <div>Logo</div>
          <nav style={styles.navLinks}>
            <button onClick={logOut} style={styles.button}>
              Log out
            </button>
          </nav>
        </header>
        <main style={styles.hero}>
          <h1 style={styles.heroTitle}>Welcome to the Teacher Portal</h1>
          <p style={styles.heroSubtitle}>
            Manage your classes and students efficiently.
          </p>
          {students.length > 0 ? (
            <div style={styles.studentsContainer}>
              <h3>Your Students</h3>
              {students.map((student) => (
                <div key={student} style={styles.student}>
                  <p>{student}</p>
                  <div>
                    <button
                      style={styles.studentButton}
                      onClick={() => navigate(`eval/${student}`)}
                    >
                      Eval
                    </button>
                    <button
                      style={styles.studentButton}
                      onClick={() => navigate(`hist/${student}`)}
                    >
                      Hist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No students registered under teacher</p>
          )}
        </main>
        <footer style={styles.footer}>&copy; 2024 Teacher Portal</footer>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f8ff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#007bff",
    color: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    padding: "2rem",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "3rem",
    color: "#333333",
    marginBottom: "1rem",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    color: "#666666",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#007bff",
    color: "#ffffff",
  },
  studentsContainer: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#ffffff",
    padding: "2rem",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  },
  student: {
    padding: "1rem",
    borderBottom: "1px solid #dddddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  studentButton: {
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    marginLeft: "0.5rem",
  },
};
