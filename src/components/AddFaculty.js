import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {
    const [facultyName, setFacultyName] = useState('');
    const [facultyEmail, setFacultyEmail] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate adding the faculty and redirecting
        console.log('Faculty Added:', { facultyName, facultyEmail });

        alert('Faculty added successfully!'); // Success message
        setFacultyName('');
        setFacultyEmail('');

        // Redirect to the Admin Dashboard
        navigate('/admin');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add Faculty</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label htmlFor="facultyName" style={styles.label}>Faculty Name</label>
                    <input 
                        type="text" 
                        id="facultyName" 
                        value={facultyName} 
                        onChange={(e) => setFacultyName(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="facultyEmail" style={styles.label}>Faculty Email</label>
                    <input 
                        type="email" 
                        id="facultyEmail" 
                        value={facultyEmail} 
                        onChange={(e) => setFacultyEmail(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Add Faculty</button>
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
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '5px',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#4caf9b',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default AddFaculty;
