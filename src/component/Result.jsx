import React, { useState } from "react";
import { Link } from "react-router-dom";

import Body from "./Body";

const Resultpage = (props) => {
  const [show, setShow] = useState(true);
  const { score, totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers } = props;

  return (
    <>
      {show ? (
        <div>
          <h2 className="head">Result</h2>
          <div className="result-area">
            <p className="h2">Your score is {score}</p>
            <div className="Detail">
              <p className="heading3">Total no. of questions</p>
              <p className="Integer"><b>{totalQuestions}</b></p>
              <p className="heading3">Number of attempted questions</p>
              <p className="Integer"><b>{attemptedQuestions}</b></p>
              <p className="heading3">Number of correct answers</p>
              <p className="Integer"><b>{correctAnswers}</b></p>
              <p className="heading3">Number of wrong answers</p>
              <p className="Integer"><b>{wrongAnswers}</b></p>
            </div>
            <div className="action-btn">
              <button className="play" onClick={() => setShow(false)}>Play Again</button>
              <Link to="/">
                <button className="play">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      ) :
        (<div>
          <Body />
        </div>)
      }
    </>
  );
};

export default Resultpage;