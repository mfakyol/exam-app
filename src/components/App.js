import React from "react";
import "../helpers/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./public_components/home/Home";
import About from "./public_components/About";
import InstructorHome from "./private_components/instructor_components/InstructorHome";
import StudentHome from "./private_components/student_components/StudentHome";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/instructor" exact component={InstructorHome}></Route>
        <Route path="/student" exact component={StudentHome}></Route>
      </Router>
    </div>
  );
}

export default App;
