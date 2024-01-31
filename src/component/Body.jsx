import "../App.css"
import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Result from "./Result"

class Detail extends React.Component {

    constructor() {
        super()
        this.state = {
            questionarr:
                [
                    {
                        "question": "What temperature does water boil at?",
                        "optionA": "50 degrees Celcius",
                        "optionB": "25 degrees Celcius",
                        "optionC": "100 degrees Celcius",
                        "optionD": "150 degrees Celcius",
                        "answer": "100 degrees Celcius"
                    },

                    {
                        "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
                        "optionA": "Wole Soyinka",
                        "optionB": "William Shakespeare",
                        "optionC": "Ngozi Chimamanda Adichie",
                        "optionD": "Dan Brown",
                        "answer": "William Shakespeare"
                    },

                    {
                        "question": "What did the crocodile swallow in Peter Pan?",
                        "optionA": "A Book",
                        "optionB": "A Computer",
                        "optionC": "A pair of shoes",
                        "optionD": "Alarm Clock",
                        "answer": "Alarm Clock"
                    },

                    {
                        "question": "Which is the only mammal that can’t jump?",
                        "optionA": "Dog",
                        "optionB": "Elephant",
                        "optionC": "Goat",
                        "optionD": "Lion",
                        "answer": "Elephant"
                    },

                    {
                        "question": "Who lived at 221B, Baker Street, London?",
                        "optionA": "Tony Stark",
                        "optionB": "Morgan Freeman",
                        "optionC": "Sherlock Holmes",
                        "optionD": "Samuel L. Jackson",
                        "answer": "Sherlock Holmes"
                    },

                    {
                        "question": "What colour is a panda?",
                        "optionA": "Green and Yellow",
                        "optionB": "Blue and Red",
                        "optionC": "Green and White",
                        "optionD": "Black and White",
                        "answer": "Black and White"
                    },

                    {
                        "question": "Where is the smallest bone in the human body?",
                        "optionA": "The Chest",
                        "optionB": "The Ear",
                        "optionC": "The Legs",
                        "optionD": "The Hands",
                        "answer": "The Ear"
                    },

                    {
                        "question": "What does the roman numeral C represent?",
                        "optionA": "100",
                        "optionB": "10",
                        "optionC": "10,000",
                        "optionD": "1,000,000",
                        "answer": "100"
                    },

                    {
                        "question": "What takes place in Hong Kong's Happy Valley?",
                        "optionA": "Chicken Wrestling",
                        "optionB": "Horse racing",
                        "optionC": "Street Racing",
                        "optionD": "Arm Wrestling",
                        "answer": "Horse racing"
                    },

                    {
                        "question": "Who painted the Mona Lisa?",
                        "optionA": "Alexander Graham Bell",
                        "optionB": "Sir Isaac Newton",
                        "optionC": "Leonardo Da Vinci",
                        "optionD": "Albert Einstein",
                        "answer": "Leonardo Da Vinci"
                    },

                    {
                        "question": "What’s the most important book in the Moslem religion?",
                        "optionA": "The Koran",
                        "optionB": "The Dictionary",
                        "optionC": "The Bible",
                        "optionD": "The Chemistry text Book",
                        "answer": "The Koran"
                    },

                    {
                        "question": "What’s the capital of Ethiopia?",
                        "optionA": "Cape Town",
                        "optionB": "San Francisco",
                        "optionC": "Abuja",
                        "optionD": "Syndey",
                        "answer": "Addis Ababa"
                    },

                    {
                        "question": "How many squares are there on a chess board?",
                        "optionA": "128",
                        "optionB": "64",
                        "optionC": "32",
                        "optionD": "256",
                        "answer": "64"
                    },

                    {
                        "question": "Who invented the electric light bulb?",
                        "optionA": "Tom Cruise",
                        "optionB": "Barack Obama",
                        "optionC": "Wole Soyinka",
                        "optionD": "Thomas Edison",
                        "answer": "Thomas Edison"
                    },

                    {
                        "question": "What are the first three words of the bible?",
                        "optionA": "be with everyone",
                        "optionB": "Again Jesus asked",
                        "optionC": "In the beginning",
                        "optionD": "At that time",
                        "answer": "In the beginning"
                    }
                ],
            currQueIndex: 0,
            score: 0,
            finish: false,
            wrong: 0
        }
    }

    handleOptClick = (questionIndex, selectedOption) => {
        const { questionarr, score } = this.state;
        const correctAnswer = questionarr[questionIndex].answer;

        if (selectedOption === correctAnswer) {
            this.setState(
                prevState => ({
                    score: prevState.score + 1,
                    currQueIndex: Math.min(prevState.questionarr.length - 1, prevState.currQueIndex + 1)
                }),
                () => {
                    alert("Correct Answer!");
                    console.log(this.state.score);
                }
            );
        } else {
            alert("Incorrect Answer!");
            this.setState(
                prevState => ({
                    wrong: prevState.wrong + 1,
                })
            )
        }
    };



    previousbtn = () => {
        this.setState(prevState => ({
            currQueIndex: Math.max(0, prevState.currQueIndex - 1)
        }));
    }

    nextBtn = () => {
        console.log(this.state.score)
        this.setState(prevState => ({
            currQueIndex: Math.min(prevState.questionarr.length - 1, prevState.currQueIndex + 1)
        }));
    }

    QuiteBtn = () => {
        const quitConfirmation = window.confirm("Are you sure you want to exit?");
        if (quitConfirmation) {
            console.log("I want to quit is being displayed");
        }
    }

    HnadleFinishbtn = () => {
        this.setState({ finish: true });
    }
    
  render() {
        const currentQuestion = this.state.questionarr[this.state.currQueIndex];

        return (
            <>
                {this.state.finish ? (
                    <Result score={this.state.score} totalQuestion = {this.state.questionarr.length} 
                    attemptedQuestions = {this.state.currQueIndex} 
                    correctAnswers = {this.state.score}
                    wrongAnswers = {this.state.wrong}
                    />
                ) : (
                    <div className="main-container">
                        <h1>Questions</h1>
                        <p className="question">{this.state.currQueIndex + 1} of {this.state.questionarr.length}</p>
                        <h5>{currentQuestion.question}</h5>
                        <div className="option-body">
                       {Object.keys(currentQuestion).filter(key => key.startsWith('option')).map((key, index) => (
                           <div key={index} className="optionsShow" onClick={() => this.handleOptClick(this.state.currQueIndex, currentQuestion[key])}>{currentQuestion[key]}</div>
                             ))}
                           </div>
                        <div className="dynamic-btn">
                            <button className="previousbtn" onClick={this.previousbtn}>Previous</button>
                            <button className="nextbtn" onClick={this.nextBtn}>Next</button>
                            <button className="quitbtn" onClick={this.QuiteBtn}>Quit</button>
                            <button onClick={this.HnadleFinishbtn}>Finish</button>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Detail