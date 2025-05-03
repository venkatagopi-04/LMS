import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const navigate = useNavigate(); // Initialize navigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate adding the student (in reality, this could involve a backend API call)
        console.log('Student Added:', { studentName, studentEmail });

        // Reset the form fields
        setStudentName('');
        setStudentEmail('');

        // Display success message and redirect to the Admin Dashboard after a short delay
        alert('Student added successfully!');
        navigate('/admin'); // Redirect to Admin Dashboard
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add Student</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="studentName" style={styles.label}>
                        Student Name
                    </label>
                    <input
                        type="text"
                        id="studentName"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="studentEmail" style={styles.label}>
                        Student Email
                    </label>
                    <input
                        type="email"
                        id="studentEmail"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Add Student
                </button>
            </form>
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
        maxWidth: '500px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#4caf9b',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
        marginTop: '10px',
    },
};

export default AddStudent;
