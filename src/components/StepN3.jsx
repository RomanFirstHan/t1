import React from "react";
import { url } from '../constans.js'

export default function StepN3({
  email,
  answer,
  handleIncreaseStep,
  setAnswer,
}) {
  const urlEmail = url + "/api/get-code?email=" + email;

  const handleSubmit = async () => {
    fetch(urlEmail, {
      'method': "GET",
    })
      .then((response) => response.json())
      .then((result) => setAnswer(result))
      .then(() => handleIncreaseStep())
      .catch((err) => console.log(err));
  };


  return (
    <div className="section-form">
      <div className="section__form form">
        <div className="form__title title">
          Получить персонализированный код
        </div>
        <button
          className="button form__button"
          type="button"
          onClick={handleSubmit}
        >
          Получить код
        </button>
      </div>
      <div className="answer">
        <div className="answer__title">Ответ: {answer}</div>
      </div>
    </div>
  );
}
