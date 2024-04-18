const optionsMarker = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
};

function Option({
  option,
  optionIndex,
  selectedQuestion,
  onOptionClick,
  clickedOptionIndex,
}) {
  let correctIcon;
  let optionButtonClasses =
    "w-full bg-secondary text-white mb-5 px-4 py-3 text-2xl font-semibold flex items-center justify-start gap-4 rounded-2xl cursor-pointer group transition-all duration-400 border-4 border-solid border-secondary hover:border-[#a729f5]";

  if (clickedOptionIndex !== null) {
    optionButtonClasses += " pointer-events-none";
    if (optionIndex === clickedOptionIndex) {
      if (selectedQuestion.answer === option) {
        optionButtonClasses += " highlight-green";
        correctIcon = true;
      } else {
        optionButtonClasses += " highlight-red";
      }
    } else {
      if (selectedQuestion.answer === option) {
        correctIcon = true;
      }
    }
  }

  return (
    <button
      className={optionButtonClasses}
      onClick={() => onOptionClick(option, optionIndex)}
    >
      <span className="option-marker bg-white text-light rounded-md p-2 px-3 transition-all duration-400 group-hover:text-[#a729f5]">
        {optionsMarker[optionIndex]}
      </span>
      <span className="text-left">{option}</span>
      {correctIcon && (
        <img
          src="./icons/icon-correct.svg"
          alt="icon correct"
          className="w-8 h-8 block ml-auto"
        />
      )}
    </button>
  );
}

export default Option;
