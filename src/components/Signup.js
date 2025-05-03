import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        role: 'student',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic (store in localStorage for now)
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/login');
 // Redirect to login
    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.overlay}></div>
            <div style={styles.titleContainer}>
                <h1 style={styles.pageTitle}>Online Assignment and Grading System</h1>
            </div>
            <div style={styles.container}>
                <h2 style={styles.heading}>Create Your Account</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                    </select>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    pageWrapper: {
        height: '100vh',
        backgroundImage: 'url(/loginbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column', // Arrange items vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'flex-end', // Align items to the right
        position: 'relative',
        paddingRight: '100px', // Add padding if needed to avoid sticking to the edge
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    titleContainer: {
        position: 'absolute',
        top: '3%',
        width: '100%',
        textAlign: 'center',
        zIndex: 2,
        
    },
    pageTitle: {
        fontSize: '45px',
        fontWeight: 'bold', // Makes the text bold
        color: '#000', // Black color
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Optional subtle shadow
        margin: 0,
        fontFamily: 'Arial, sans-serif',
    },
    container: {
        zIndex: 2,
        width: '400px',
        padding: '30px',
        textAlign: 'center',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
        transition: 'box-shadow 0.3s ease',
    },
    button: {
        padding: '12px',
        marginTop: '15px',
        backgroundColor: '#6200ea',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s ease',
    },
    buttonHover: {
        transform: 'scale(1.05)',
    },
};

export default Signup;
