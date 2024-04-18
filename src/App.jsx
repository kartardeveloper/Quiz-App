import { useState } from "react";
import Header from "./components/Header.jsx";
import Quizzes from "./components/Quizzes.jsx";
import { QUIZZES } from "./data.js";
import Quiz from "./components/Quiz.jsx";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const quizClickHandler = (quizTitle) => {
    const quiz = QUIZZES.find((quiz) => quiz.title === quizTitle);
    setSelectedQuiz(quiz);
  };

  const restartQuiz = () => {
    setSelectedQuiz({});
  };

  return (
    <>
      <Header quiz={selectedQuiz} />
      <main>
        {Object.keys(selectedQuiz).length > 0 ? (
          <Quiz
            quiz={selectedQuiz}
            restartQuiz={restartQuiz}
          />
        ) : (
          <Quizzes quizClickHandler={quizClickHandler} />
        )}
      </main>
    </>
  );
}

export default App;
