import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What year did League of Legends debut?",
      answerOptions: [
        { answerText: "2008", isCorrect: false },
        { answerText: "2009", isCorrect: true },
        { answerText: "2010", isCorrect: false },
        { answerText: "2011", isCorrect: false },
      ],
    },
    {
      questionText: "Which game developer created LoL?",
      answerOptions: [
        { answerText: "Riot", isCorrect: true },
        { answerText: "Activision Blizzard", isCorrect: false },
        { answerText: "Nintendo", isCorrect: false },
        { answerText: "Rockstar Games", isCorrect: false },
      ],
    },
    {
      questionText: "What does a “SKIN” refer to in the game?",
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
      questionText: "Which of these champions is a MAGE?",
      answerOptions: [
        { answerText: "Sona", isCorrect: false },
        { answerText: "Miss Fortune", isCorrect: false },
        { answerText: "Annie", isCorrect: true },
        { answerText: "Leona", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [resetQuiz, setResetQuiz] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <h1>League of Legends Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button onClick={() => window.location.reload(false)}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => {
              return (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
