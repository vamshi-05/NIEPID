import React from "react";
import Register from "./pages/Register";
import AddStudents from "./pages/AddStudents";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import Principle from "./pages/Principle";
import Student from "./pages/Student";
import StudentEval from "./pages/StudentEval";
import "react-toastify/dist/ReactToastify.css";
import Class from "./pages/Class";
import StudentHistory from "./pages/StudentHistory";
import PrivateRoute from './routes/PrivateRoute';
import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import PrinciplePrivateRoute from "./routes/PrinciplePrivateRoute";
import StudentPrivateRoute from "./routes/StudentPrivateRoute";
import TeacherPrivateRoute from "./routes/TeacherPrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} /> */}
        <Route exact path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Login />} />
            <Route element={<AdminPrivateRoute />}>
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/addstudents" element={<AddStudents />} />
        
            </Route>
            <Route element={<StudentPrivateRoute />}>
                <Route exact path="/student" element={<Student />} />
        
            </Route>
            <Route element={<TeacherPrivateRoute />}>
                <Route exact path="/teacher" element={<Teacher />} />
        
            </Route>
            <Route element={<PrinciplePrivateRoute />}>
                <Route exact path="/principle" element={<Principle />} />
        
            </Route>

        </Route>
        {/* <Route exact path="/profile/:username" element={<AddStudents />} /> */}
        <Route exact path="/class" element={<Class />} />
        <Route  path="/eval/:username" element={<StudentEval />} />
        <Route  path="/hist/:username" element={<StudentHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
