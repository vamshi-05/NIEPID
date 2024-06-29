import React from 'react';

// Sample data
const teacherDetails = [
    { id: 1, name: 't1', email: 't1@', mobile: '123-456-7890', classid: 'C101' },
    { id: 2, name: 't2', email: 't2@', mobile: '234-567-8901', classid: 'C102' },
    { id: 3, name: 't3', email: 't3@', mobile: '345-678-9012', classid: 'C103' },
];

const TeacherTable = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Teacher Details</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        {['ID', 'Name', 'Email', 'Mobile', 'Class ID'].map((header) => (
                            <th style={styles.th} key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {teacherDetails.map((teacher, index) => (
                        <tr key={teacher.id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <td style={styles.td}>{teacher.id}</td>
                            <td style={styles.td}>{teacher.name}</td>
                            <td style={styles.td}>{teacher.email}</td>
                            <td style={styles.td}>{teacher.mobile}</td>
                            <td style={styles.td}>{teacher.classid}</td>
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

export default TeacherTable;