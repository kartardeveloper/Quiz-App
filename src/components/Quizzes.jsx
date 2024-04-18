import { QUIZZES } from "../data.js";

function Quizzes({ quizClickHandler }) {
  return (
    <div className="container mx-auto py-14 px-14">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-6xl text-white mb-12">
            Welcome to the <p className="font-medium mt-2">Frontend Quiz!</p>
          </h2>
          <p className="text-xl text-light italic">
            Pick a subject to get started.
          </p>
        </div>
        <div>
          {QUIZZES.map((quiz) => {
            return (
              <button
                key={quiz.title}
                className="w-full bg-secondary text-white mb-5 p-4 text-2xl font-semibold flex items-center gap-4 rounded-md cursor-pointer"
                onClick={() => quizClickHandler(quiz.title)}
              >
                <span className="bg-white rounded-md p-1">
                  <img src={quiz.icon} alt="Quiz Icon" className="w-8 h-8" />
                </span>

                <span>{quiz.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
