function Result({ answers, quizRestartHandler }) {
  const correctAnswersCount = answers.filter(
    (answer) => answer.answerType === "correct"
  ).length;

  return (
    <div className="container mx-auto py-10 px-14">
      <div className="grid grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-5xl text-white font-semibold mb-4">
            <p className="mb-3">Quiz Completed!</p>
            You Scored...
          </h2>
          <div>
            <h3 className="text-9xl text-white font-semibold mb-1">
              {correctAnswersCount}
            </h3>
            <p className="text-white text-2xl font-semibold">
              Out of {answers.length}
            </p>
          </div>
          <button
            onClick={quizRestartHandler}
            className="bg-[#a729f5] text-white text-lg font-medium py-3 px-5 rounded-md mt-7 hover:bg-[#8b21cd] transition-all"
          >
            Take Quiz Again
          </button>
        </div>
        <div>
          <h3 className="text-4xl text-white font-semibold mb-4">Summary</h3>
          <ol className="list-decimal list-inside">
            {answers.map((answer, index) => {
              let answerClasses = "text-2xl mb-2 ";

              if (answer.answerType === "correct") {
                answerClasses += "text-green-600";
              } else if (answer.answerType === "wrong") {
                answerClasses += "text-red-600";
              } else {
                answerClasses += "text-white";
              }
              return (
                <li key={index} className={answerClasses}>
                  {answer.answer != null ? answer.answer : "Skipped!"}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Result;
