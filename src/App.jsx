import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route here
import Body from "./component/Body";
import Start from "./component/Start";
import Result from "./component/Result";

class Quizapp extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/Body" element={<Body/>}></Route>
            
          </Routes>
        </Router>
      </>
    );
  }
}

export default Quizapp;
