import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewFaculty = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    // Sample data to represent faculty
    const facultyList = [
        { id: 1, name: 'John', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];

    return (
        <div style={styles.container}>
            <button style={styles.backButton} onClick={() => navigate('/admin')}>
                Back to Dashboard
            </button>
            <h2 style={styles.title}>View Faculty</h2>
            <ul style={styles.list}>
                {facultyList.map((faculty) => (
                    <li key={faculty.id} style={styles.listItem}>
                        <span style={styles.name}>{faculty.name}</span> -{' '}
                        <span style={styles.email}>{faculty.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Internal CSS styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        margin: '50px auto',
        width: '90%',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    backButton: {
        backgroundColor: '#4caf9b',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        marginBottom: '15px',
        transition: 'background-color 0.3s',
    },
    backButtonHover: {
        backgroundColor: '#0056b3',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        fontSize: '16px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    name: {
        fontWeight: 'bold',
        color: '#007bff',
    },
    email: {
        color: '#555',
    },
};

export default ViewFaculty;
