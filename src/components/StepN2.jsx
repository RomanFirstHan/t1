import React, { useState } from 'react'

export default function StepN2({ roles, handleIncreaseStep }) {

  const handleSubmit = async () => {
    // Тут как я понимаю будет другой фетч запрос. Кстати, метод ГЕТ стоит по умолчанию и его можно не прописывать
    fetch('http://193.19.100.32:7000/api/get-roles', {
      'method': 'GET',

    })
      .then(response => response.json())
      .then(result => result.roles)
      .then(() => handleIncreaseStep())
      .catch(err => console.log(err))
  }


  // fetch('http://193.19.100.32:7000/api/get-roles', {
  //    'method': 'GET',  

  //  })
  //  .then(response => response.json())
  //  .then(result => {
  //    let y = result.roles
  //    console.log(y)
  //  })

  //  .catch(err => console.log(err))



  //  const options = (res) => {
  //    console.log(res)
  //  } 

  //  options()
  return (
    <form className='form'>
      <div className='form__body'>
        <select name="" id="roles" className="form__input input" required>
          <option value="disabled" disabled selected>Выберите роль</option>

        </select>
      </div>
      <button className='button form__button' type='button' onClick={handleSubmit}>Получить код</button>
    </form>
  )
}
