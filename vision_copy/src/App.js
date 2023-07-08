import React from "react";
import Dashboard from "./components/dashboard/Dashboard.js";
import LogIn from "./components/log_in/log_in.js";
import SignUp from "./components/sing_up/SignUp.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import signUp from "./components/sing_up/SignUp.js";
function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
    // <>
    //   <Dashboard />
    //   <SignIn />
    //   <SignUp />
    //   <Home />
    // </>
  );
}

export default app;
