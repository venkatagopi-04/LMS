import React from 'react';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission

        const role = document.getElementById("role").value;

        if (role === "student") {
            window.location.href = "StudentDashboard"; // Redirect to student dashboard
        } else if (role === "faculty") {
            window.location.href = "FacultyDashboard"; // Redirect to faculty dashboard
        } else {
            alert("Please select a valid role.");
        }
    };

    return (
        <div style={styles.container}>
             <div style={styles.titleContainer}>
                <h1 style={styles.pageTitle}>Online Assignment and Grading System</h1>
            </div>
            <section style={styles.formContainer}>
                <h2 style={styles.formTitle}>Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.formGroup}>
                        <label htmlFor="role" style={styles.label}>Select Role:</label>
                        <select id="role" name="role" required style={styles.select}>
                            <option value="" disabled selected>Select your role</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.linkText}>
                    Don't have an account?{' '}
                    <a href="index.js" style={styles.link}>SignUp</a>
                </p>
            </section>
        </div>
    );
};

// Styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-start', // Align to the left
        alignItems: 'center', // Center vertically
        paddingLeft: '4%', // Adjust horizontal spacing
        backgroundImage: 'url("/signupbg.jpg")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#333',
    },
   
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent form background
        padding: '20px 30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
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
    formTitle: {
        margin: '0 0 20px',
        fontSize: '1.5em',
        color: '#6200ea',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '0.9em',
    },
    select: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1em',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1em',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#6200ea',
        color: 'white',
        fontSize: '1em',
        cursor: 'pointer',
    },
    linkText: {
        marginTop: '15px',
        fontSize: '0.9em',
    },
    link: {
        color: '#6200ea',
        textDecoration: 'none',
    },
};

export default Login;
