import { useCallback, useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Result from "./Result";
import Options from "./Options";

function Quiz({ quiz, restartQuiz }) {
  const quizQuestions = quiz.questions;

  const [answers, setAnswers] = useState([]);
  const selectedQuestion = quizQuestions[answers.length];

  const [clickedOptionIndex, setClickedOptionIndex] = useState(null);

  const optionClickHandler = (option, optionIndex) => {
    setClickedOptionIndex(optionIndex);
    let answerType;
    if (option === null) {
      answerType = null;
    } else {
      if (selectedQuestion.answer === option) {
        answerType = "correct";
      } else {
        answerType = "wrong";
      }
    }

    setTimeout(() => {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          answer: option,
          answerType: answerType,
        },
      ]);
      setClickedOptionIndex(null);
    }, 2000);
  };

  const questionTimer = useCallback(() => optionClickHandler(null), []);

  const quizRestartHandler = () => {
    setAnswers([]);
    restartQuiz();
  };

  if (quizQuestions.length === answers.length) {
    return <Result answers={answers} quizRestartHandler={quizRestartHandler} />;
  }

  return (
    <div className="container mx-auto py-14 px-14">
      <div className="grid grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-xl text-light italic mb-6">
            Question {answers.length + 1} of {quizQuestions.length}
          </p>
          <h2 className="text-4xl text-white font-semibold mb-20">
            {selectedQuestion.question}
          </h2>
          <QuestionTimer
            key={answers.length}
            timeout={20000}
            onTimeout={questionTimer}
          />
        </div>
        <Options
          selectedQuestion={selectedQuestion}
          onOptionClick={optionClickHandler}
          clickedOptionIndex={clickedOptionIndex}
        />
      </div>
    </div>
  );
}

export default Quiz;
