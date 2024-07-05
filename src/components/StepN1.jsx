import React, { useState } from 'react'
import { url } from '../constans.js'

export default function StepN1({ setEmail, setLastName, setRoles, setName, handleIncreaseStep }) {

  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(url +'/api/get-roles', {
      'method': 'GET',
    })
      .then(response => response.json())
      .then(result => setRoles(result.roles))
      .then(() => handleIncreaseStep())
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__item'>
          <label htmlFor="name" className='form__title'>Имя</label>
          <input type="text" placeholder='Имя' id="name" className='form__input input' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form__item'>
          <label htmlFor="lastName" className='form__title'>Фамилия</label>
          <input type="text" placeholder='Фамилия' id="lastName" className='form__input input' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='form__item'>
          <label htmlFor="email" className='form__title'>Email</label>
          <input type="email" placeholder='Email' id="email" className='form__input input' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className='button form__button'>Получить список ролей</button>
      </form>
      <div>{isLoading && <p className='loading'>Грузим ответ</p>}</div>
    </>
  )
}


