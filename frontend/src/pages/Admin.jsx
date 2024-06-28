import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [isAdmin, setIsAdmin] = useState(false); // This state will determine whether to show Admin or Home component
    const [isTeacher, setIsTeacher] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [term, setTerm] = useState('');
    const [year, setYear] = useState('');
    const [group, setGroup] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);

    //useEffect(() => {
    //     const verifyUser = async () => {
    //         if (!cookies.jwt) {
    //             navigate('/login');
    //         } else {
    //             const { data } = await axios.post(
    //                 'http://localhost:4000/admin/',
    //                 {},
    //                 {
    //                     withCredentials: true,
    //                 }
    //             );
    //             if (!data.status) {
    //                 toast.error(data.message);
    //                 navigate('/');
    //             }
    //         }
    //     };
    //     verifyUser();
    // }, [cookies, navigate]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            if (!selectedFile) {
                setUploadStatus('No file selected');
                return;
            }

            const formData = new FormData();
            formData.append('file', selectedFile);

            let response;
            if (isTeacher) {
                response = await axios.post('http://localhost:4000/addteachers', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                });
            } else {
                formData.append('term', term);
                formData.append('year', year);
                formData.append('group', group);

                response = await axios.post('http://localhost:4000/addstudents', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                });
            }

            if (response) {
                navigate('/admin');
                setUploadStatus('File uploaded successfully');
            }
        } catch (error) {
            setUploadStatus('Error uploading file');
            console.error(error);
        }
    };

    const handleDownloadTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/downloadteachers', {
                responseType: 'blob',
                withCredentials: true,
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'teachers.xlsx');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (isTeacher) {
            handleDownloadTeachers();
        } else {
            await handleUpload(e);
        }
    };

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
    };

    const handleLogout = () => {
        removeCookie('jwt');
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        navigate('/');
    };

    const handleNavigateToStudentRegistration = () => {
        navigate('/admin/addstudents');
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={{ fontSize: '1.5rem' }}>Logo</div>
                <nav style={styles.navLinks}>
                    <a href="/about" style={styles.navLink}>
                        About
                    </a>
                    <a href="/services" style={styles.navLink}>
                        Services
                    </a>
                    <a href="/contact" style={styles.navLink}>
                        Contact
                    </a>
                </nav>
                <button onClick={handleLogout} style={styles.button}>
                    Logout
                </button>
            </header>
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>Welcome to Our Website</h1>
                <p style={styles.heroSubtitle}>
                    Explore our services and get to know us better.
                </p>
            </div>

            <div style={styles.adminContainer}>
                <div
                    style={styles.halfContainer}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <h1 style={styles.h1}>Teachers</h1>
                    <form onSubmit={handleRegister} style={styles.formGroup}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Upload Excel File:</label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <button type="submit" style={styles.button}>
                                Register
                            </button>
                        </div>
                        <div style={styles.formGroup}>
                            <button
                                type="button"
                                onClick={handleDownloadTeachers}
                                style={styles.button}
                            >
                                Download Spreadsheet
                            </button>
                            <p style={{ textAlign: 'left' }}>Download Spreadsheet</p>
                        </div>
                        <div style={styles.formGroup}>
                            <button
                                type="button"
                                onClick={() => alert('View button clicked')}
                                style={styles.button}
                            >
                                View
                            </button>
                        </div>
                        {uploadStatus && (
                            <p style={styles.uploadStatus}>{uploadStatus}</p>
                        )}
                    </form>
                </div>

                <div
                    style={styles.halfContainer}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <h1 style={styles.h1}>Students</h1>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Register Student:</label>
                        <button
                            type="button"
                            onClick={handleNavigateToStudentRegistration}
                            style={styles.button}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>

            <footer style={styles.footer}>
                <p>&copy; 2023 Our Website. All rights reserved.</p>
            </footer>

            <ToastContainer />
        </div>
    );
}


const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f0f8ff',
  },
  header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navLinks: {
      display: 'flex',
      gap: '1.5rem',
  },
  navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s',
  },
  navLinkHover: {
      color: '#cccccc',
  },
  hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      padding: '2rem',
      textAlign: 'center',
  },
  heroTitle: {
      fontSize: '3rem',
      color: '#333333',
      marginBottom: '1rem',
  },
  heroSubtitle: {
      fontSize: '1.5rem',
      color: '#666666',
      marginBottom: '2rem',
  },
  button: {
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
  },
  footer: {
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
  },
  adminContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '2rem',
      background: '#f0f8ff',
      alignItems: 'center',
  },
  halfContainer: {
      flex: '0 0 45%',
      backgroundColor: '#ffffff',
      padding: '2rem',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      marginBottom: '5rem',
      transition: 'transform 0.3s',
  },
  h1: {
      marginBottom: '1.5rem',
      color: '#333333',
      fontSize: '2rem',
      textAlign: 'center',
  },
  formGroup: {
      marginBottom: '1rem',
      textAlign: 'left',
  },
  label: {
      fontSize: '1rem',
      color: '#555555',
      display: 'block',
      marginBottom: '0.5rem',
  },
  input: {
      padding: '0.8rem',
      fontSize: '1rem',
      border: '1px solid #cccccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      marginTop: '0.5rem',
  },
  inputFocus: {
      borderColor: '#007bff',
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
  },
  select: {
      padding: '0.8rem',
      fontSize: '1rem',
      border: '1px solid #cccccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      marginTop: '0.5rem',
  },
  selectFocus: {
      borderColor: '#007bff',
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
  },
  uploadStatus: {
      marginTop: '1rem',
      color: '#ff0000',
  },
};


export default App;
