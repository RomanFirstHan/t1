import React from "react";

export default function StepN4({ handleIncreaseStep, answer }) {
  const code = "*".repeat(answer.length) + answer.slice(-4);

  const handleSubmit = () => {
    console.log("gay");
    handleIncreaseStep();
  };

  return (
    <div className="section--form">
      <div className="section__form form">
        <div className="form__title title">
          Сгенерировать закодированный токен
        </div>
        <button
          className="button form__button"
          type="button"
          onClick={handleSubmit}
        >
          Сгенерировать
        </button>
      </div>
      <div className="answer">
        <div className="answer__title">Мой код: {code}</div>
      </div>
    </div>
  );
}
