import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewStudents = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    // Sample data to represent students
    const studentList = [
        { id: 1, name: 'Alex Johnson', email: 'alex.johnson@example.com' },
        { id: 2, name: 'Sarah Lee', email: 'sarah.lee@example.com' },
    ];

    return (
        <div style={styles.container}>
            {/* Back to Dashboard Button */}
            <button onClick={() => navigate('/admin')} style={styles.backButton}>
                Back to Dashboard
            </button>

            <h2 style={styles.title}>View Students</h2>
            <ul style={styles.list}>
                {studentList.map((student) => (
                    <li key={student.id} style={styles.listItem}>
                        {student.name} - {student.email}
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
        padding: '20px',
        margin: '50px auto',
        width: '90%',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    backButton: {
        backgroundColor: '#4caf9b',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
        marginBottom: '20px',
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
        padding: '10px',
        borderBottom: '1px solid #ccc',
        fontSize: '18px',
        color: '#333',
    },
};

export default ViewStudents;
