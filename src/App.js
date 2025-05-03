import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'; // Ensure case matches the file name
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import EditAssignment from './components/EditAssignment';
import EditGivenAssignment from './components/EditGivenAssignment';
import Grades from './components/Grades';
import Feedback from './components/FacultyFeedback';
import StudentFeedback from './components/StudentFeedback';
import ViewFacultyFeedback from './components/ViewFacultyFeedback';
import SubmitAssignment from './components/SubmitAssignment';
import SubmissionCount from './components/SubmissionCount';
import ViewStudentFeedback from './components/ViewStudentFeedback';
import GiveAssignment from './components/GiveAssignment';
import ViewAssignments from './components/ViewAssignments';
import ViewSubmissions from './components/ViewSubmissions';

// Admin components
import AdminDashboard from './components/AdminDashboard';
import AddFaculty from './components/AddFaculty';
import ViewFaculty from './components/ViewFaculty';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} /> {/* Default route to show signup */}
      <Route path="/login" element={<Login />} />
      <Route path="/StudentDashboard" element={<StudentDashboard />} />
      <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
      <Route path="/EditAssignment" element={<EditAssignment />} />
      <Route path="/EditGivenAssignment" element={<EditGivenAssignment />} />
      <Route path="/Grades" element={<Grades />} />
      <Route path="/FacultyFeedback" element={<Feedback />} />
      <Route path="/StudentFeedback" element={<StudentFeedback />} />
      <Route path="/ViewFacultyFeedback" element={<ViewFacultyFeedback />} />
      <Route path="/SubmitAssignment" element={<SubmitAssignment />} />
      <Route path="/SubmissionCount" element={<SubmissionCount />} />
      <Route path="/ViewStudentFeedback" element={<ViewStudentFeedback />} />
      <Route path="/GiveAssignment" element={<GiveAssignment />} />
      <Route path="/ViewSubmissions" element={<ViewSubmissions />} />
      <Route path="/ViewAssignments" element={<ViewAssignments />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/add-faculty" element={<AddFaculty />} />
      <Route path="/admin/view-faculty" element={<ViewFaculty />} />
      <Route path="/admin/add-student" element={<AddStudent />} />
      <Route path="/admin/view-students" element={<ViewStudents />} />
    </Routes>
  );
}

export default App;