import React from 'react'
import { url } from '../constans.js'
import { baseToken } from '../utils.js'

export default function StepN5({answer, email, setAnswer, handleIncreaseStep}) {
  

  function base (){
    return window.btoa(email + ':' + answer)
  
}

   const token = base()
   const body = {      
         "token": token,
         "status": "increased"       
   }
   const code = baseToken(token);

   const handleSubmit = async () => {
      fetch(url + '/api/set-status', {
        'method': 'POST',
        'body': JSON.stringify(body),
         'headers': {'Content-Type': 'application/json'}
  
      })
        .then(response => response.json())
        .then(result => setAnswer(result))
        .then(() => handleIncreaseStep())
        .catch(err => console.log(err))
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
