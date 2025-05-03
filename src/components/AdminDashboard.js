import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Admin Dashboard</h1>
            <div style={styles.linkContainer}>
                <Link to="/admin/add-faculty" style={styles.linkBox}>Add Faculty</Link>
                <Link to="/admin/view-faculty" style={styles.linkBox}>View Faculty</Link>
                <Link to="/admin/add-student" style={styles.linkBox}>Add Student</Link>
                <Link to="/admin/view-students" style={styles.linkBox}>View Students</Link>
            </div>
        </div>
    );
};

// Internal CSS for styling
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: 0,
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '40px',
        textAlign: 'center',
    },
    linkContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 200px)', // Adjust number of columns
        gap: '20px',
        justifyContent: 'center',
    },
    linkBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '100px',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#4caf9b',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        transition: 'transform 0.3s, background-color 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    linkBoxHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
};

export default AdminDashboard;
