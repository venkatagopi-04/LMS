import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const loadSubmissions = () => {
        const params = new URLSearchParams(location.search);
        const assignmentId = params.get('assignmentId');

        const exampleSubmissions = [
            { id: 1, studentName: 'John Doe', fileName: 'assignment1_student1.pdf', fileUrl: '/uploads/assignment1_student1.pdf', assignmentId: '1' },
            { id: 2, studentName: 'Jane Smith', fileName: 'assignment1_student2.pdf', fileUrl: '/uploads/assignment1_student2.pdf', assignmentId: '1' },
            { id: 3, studentName: 'Tom Brown', fileName: 'assignment1_student3.pdf', fileUrl: '/uploads/assignment1_student3.pdf', assignmentId: '1' }
        ];

        setSubmissions(exampleSubmissions.filter(sub => sub.assignmentId === assignmentId));
    };

    useEffect(() => {
        loadSubmissions();
    }, [location.search]);

    const styles = {
        // Your CSS styles...
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>View Student Submissions</h1>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <button onClick={() => navigate('/FacultyDashboard')} style={styles.navButton}>Back to Dashboard</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section style={styles.submissionContainer}>
                <h2 style={styles.submissionTitle}>Submissions for Assignment</h2>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Submission ID</th>
                            <th style={styles.tableHeader}>Student Name</th>
                            <th style={styles.tableHeader}>File Name</th>
                            <th style={styles.tableHeader}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.length > 0 ? submissions.map(submission => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.studentName}</td>
                                <td>{submission.fileName}</td>
                                <td>
                                    <a href={submission.fileUrl} className="action-btn" style={styles.actionBtn} target="_blank" rel="noopener noreferrer">View File</a>
                                    <button onClick={() => navigate(`/evaluate-assignment?submissionId=${submission.id}`)} className="action-btn" style={styles.actionBtn}>Evaluate</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={styles.noSubmissions}>No submissions found for this assignment.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 Online Assignment Submission & Grading System</p>
            </footer>
        </div>
    );
};

export default ViewSubmissions;
