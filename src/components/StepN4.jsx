import React from "react";

export default function StepN4({ email, handleIncreaseStep, answer }) {
  const code = "*".repeat(answer.length-4) + answer.slice(-4);

  const handleSubmit = () => {
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
