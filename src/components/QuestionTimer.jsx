import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setremainingTime] = useState(timeout);

  useEffect(() => {
    const quizTimeout = setTimeout(onTimeout, timeout);
    return () => clearTimeout(quizTimeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setremainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(timeInterval);
  }, []);

  return <progress max={timeout} className="w-full" value={remainingTime} />;
}

export default QuestionTimer;
