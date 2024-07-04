import React from "react";

export default function StepN3({
  email,
  answer,
  handleIncreaseStep,
  setAnswer,
}) {
  const url = "http://193.19.100.32:7000/api/get-code?email=" + email;

  const handleSubmit = async () => {
    // Тут как я понимаю будет другой фетч запрос. Кстати, метод ГЕТ стоит по умолчанию и его можно не прописывать
    fetch(url, {
      method: "GET",
      //   'body': JSON.stringify(body),
      // 'headers': {'Content-Type': 'application/json'}
    })
      .then((response) => response.json())
      .then((result) => setAnswer(result))
      .then(() => handleIncreaseStep())
      .catch((err) => console.log(err));
  };

  return (
    <div className="section--form">
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
