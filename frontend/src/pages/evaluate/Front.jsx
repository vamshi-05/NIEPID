import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from './th.jpeg';

const Front = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src={image} alt="Logo" style={styles.logoImage} />
          <span style={styles.logoLabel}>NIEPID</span>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.heading}>Functional Assessment Checklist for Programming</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigateTo('personal/')}>Personal</button>
          <button style={styles.button} onClick={() => navigateTo('social/')}>Social</button>
          <button style={styles.button} onClick={() => navigateTo('occupational/')}>Occupational</button>
          <button style={styles.button} onClick={() => navigateTo('recreational/')}>Recreational</button>
          <button style={styles.button} onClick={() => navigateTo('academic/')}>Academic</button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 Functional Assessment. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    color: '#333',
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
  main: {
    flex: '1',
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    margin: '0',
    marginBottom: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default Front;
