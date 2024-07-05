import React from 'react'

export default function StepN5({answer, email, setAnswer, handleIncreaseStep}) {

   const token = base()
   const body = {      
         "token": token,
         "status": "increased"       
   }



   const code = "*".repeat(token.length-4) + token.slice(-4);

   const handleSubmit = async () => {
      fetch('http://193.19.100.32:7000/api/set-status', {
        'method': 'POST',
        'body': JSON.stringify(body),
         'headers': {'Content-Type': 'application/json'}
  
      })
        .then(response => response.json())
        .then(result => setAnswer(result))
        .then(() => handleIncreaseStep())
        .catch(err => console.log(err))
    }

   function base (){
         return window.btoa(email + ':' + answer)
       
   }


  return (
   <div className="section-form">
      <div className="section__form form">
        <div className="form__title title">
        Установить статус increased 
        </div>
        <button
          className="button form__button"
          type="button"
          onClick={()=>handleSubmit()}
        >
          Установить
        </button >
      </div>
      <div className="answer">
        <div className="answer__title">Закодированный токен: {code} </div>
      </div>
 </div>
  )
}
