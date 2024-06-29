import React from 'react';

// Sample data
const studentDetails = [
    { id: 1, name: 's1', year: '2nd', section: 'A' },
    { id: 2, name: 's2', year: '3rd', section: 'B' },
    { id: 3, name: 's3', year: '1st', section: 'C' },
];

const StudentTable = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Student Details</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        {['ID', 'Name', 'Year', 'Section'].map((header) => (
                            <th style={styles.th} key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {studentDetails.map((student, index) => (
                        <tr key={student.id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <td style={styles.td}>{student.id}</td>
                            <td style={styles.td}>{student.name}</td>
                            <td style={styles.td}>{student.year}</td>
                            <td style={styles.td}>{student.section}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        margin: '20px auto',
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif"
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px'
    },
    th: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
        backgroundImage: 'linear-gradient(to right, #0066cc, #0099ff)',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '16px',
        position: 'sticky',
        top: '0',
        zIndex: '1'
    },
    td: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
        color: '#555',
        fontSize: '14px',
        transition: 'background-color 0.3s'
    },
    evenRow: {
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
    },
    oddRow: {
        backgroundColor: '#ffffff',
        transition: 'background-color 0.3s',
    },
    rowHover: {
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#e9ecef'
        }
    }
};

export default StudentTable;
