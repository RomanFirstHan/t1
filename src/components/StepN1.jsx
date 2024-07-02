import React from 'react'


function StepN1() {

  const tap = (e) =>{
    e.preventDefault()
  }

  return (
    <>
    <form className='form'>
      <div className='form__item'>
        <label htmlFor="name" className='form__title'>Имя</label>
        <input type="text" placeholder='Имя' id="name" className='form__input'/>
      </div>
      <div className=''>
        <label htmlFor="lastName" className='form__title'>Фамилия</label>
        <input type="text" placeholder='Фамилия' id="lastName" className='form__input'/>
      </div>
      <div className=''>
        <label htmlFor="email" className='form__title'>email</label>
        <input type="text" placeholder='Email' id="email" type='email' className='form__input'/>
      </div>
      <button onClick={tap} className='button'>Получить список ролей</button>
    </form>
    <div className='form__image'>
      <img src="" alt="" />
    </div>
    </>
  )
}

export default StepN1
