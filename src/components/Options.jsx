import Option from "./Option";

function Options({ selectedQuestion, onOptionClick, clickedOptionIndex }) {
  return (
    <div>
      {selectedQuestion.options.map((option, index) => {
        return (
          <Option
            key={index}
            option={option}
            optionIndex={index}
            selectedQuestion={selectedQuestion}
            onOptionClick={onOptionClick}
            clickedOptionIndex={clickedOptionIndex}
          />
        );
      })}
    </div>
  );
}

export default Options;
