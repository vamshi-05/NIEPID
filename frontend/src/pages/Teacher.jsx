import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from './th.jpeg';

export default function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [students, setStudents] = useState({});
  const teacherName = "John Doe";

  useEffect(() => {
    // getDetails();
    // Using static data for demonstration
    const groupedStudents = {
      101: [
        { id: 1, name: "Student A" },
        { id: 2, name: "Student B" }
      ],
      102: [
        { id: 3, name: "Student C" },
        { id: 4, name: "Student D" }
      ]
    };
    setStudents(groupedStudents);
  }, []);

  const logOut = () => {
    removeCookie("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
  };

  const Header = () => (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={image} alt="Logo" style={styles.logoImage} />
        <span style={styles.logoLabel}>NIEPID</span>
      </div>
      <nav style={styles.navLinks}>
        <button onClick={logOut} style={styles.button}>
          Log out
        </button>
      </nav>
    </header>
  );

  const Footer = () => (
    <footer style={styles.footer}>&copy; 2024 Teacher Portal</footer>
  );

  return (
    <>
      <ToastContainer />
      <div style={styles.container}>
        <Header />
        <main style={styles.hero}>
          <h2 style={styles.heroTitle}>Welcome to the Teacher Portal</h2>
          <p style={styles.heroSubtitle}>
            Manage your classes and students efficiently.
          </p>
          <h3 style={styles.teacherInfo}>Welcome, {teacherName}!</h3>
          {Object.keys(students).length > 0 ? (
            Object.keys(students).map((classId) => (
              <div key={classId} style={styles.classContainer}>
                <h3>Class {classId}</h3>
                {students[classId].map((student) => (
                  <div key={student.id} style={styles.student}>
                    <p>{student.name}</p>
                    <div>
                      <button
                        style={styles.studentButton}
                        onClick={() => navigate(`eval/`)}
                      >
                        Eval
                      </button>
                      <button
                        style={styles.studentButton}
                        onClick={() => navigate(`hist/`)}
                      >
                        Hist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No students registered under teacher</p>
          )}
        </main>
        <Footer />
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
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '0.5rem',
  },
  logoLabel: {
    fontSize: '1.5rem',
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
  teacherInfo: {
    fontSize: "1.2rem",
    color: "#007bff",
    marginBottom: "1rem",
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
  classContainer: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#ffffff",
    padding: "2rem",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    marginBottom: "2rem",
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
