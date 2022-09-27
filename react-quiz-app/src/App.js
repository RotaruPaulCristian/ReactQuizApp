import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "WHAT YEAR DID LEAGUE OF LEGENDS DEBUT?",
      answerOptions: [
        { answerText: "2008", isCorrect: false },
        { answerText: "2009", isCorrect: true },
        { answerText: "2010", isCorrect: false },
        { answerText: "2011", isCorrect: false },
      ],
    },
    {
      questionText: "WHICH GAME DEVELOPER CREATED LOL?",
      answerOptions: [
        { answerText: "Riot", isCorrect: true },
        { answerText: "Activision Blizzard", isCorrect: false },
        { answerText: "Nintendo", isCorrect: false },
        { answerText: "Rockstar Games", isCorrect: false },
      ],
    },
    {
      questionText: "WHAT DOES A “SKIN” REFER TO IN THE GAME?",
      answerOptions: [
        { answerText: "A form of currency", isCorrect: false },
        { answerText: "A specific weapon for a champion", isCorrect: false },
        {
          answerText: "A resource used to upgrade a champions level",
          isCorrect: false,
        },
        {
          answerText: "An alternate color scheme or appearance for a champion",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "WHICH OF THESE CHAMPIONS IS A MAGE?",
      answerOptions: [
        { answerText: "Sona", isCorrect: false },
        { answerText: "Miss Fortune", isCorrect: false },
        { answerText: "Annie", isCorrect: true },
        { answerText: "Leona", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">{questions[0].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[0].answerOptions.map((answerOption) => {
              return <button>{answerOption.answerText}</button>;
            })}
          </div>
        </>
      )}
    </div>
  );
}
