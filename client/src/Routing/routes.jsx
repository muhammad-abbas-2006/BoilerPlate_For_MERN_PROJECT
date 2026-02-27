import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const Routing = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
);
export default Routing;