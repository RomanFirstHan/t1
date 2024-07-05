import React, { useState } from 'react'
import { url } from '../constans.js'


export default function StepN2({ setAnswer, name, lastName, email, roles, handleIncreaseStep  }) {

  const [role, setRole] = useState('');
  
  const body = {
    "last_name": lastName,
    "first_name": name,
    "email": email,
    "role": role
  }



  const handleSubmit = async () => {
    fetch(url + '/api/sign-up', {
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
    <form className='form'>
      <div className='form__body'>
        <select name="" id="roles" className="form__input input" defaultValue={'default'} required onChange={(e)=> setRole(e.target.value)}>
          <option value="default" disabled>Выберите роль</option>
          {roles.map((role, index) => (
             <option value={role} key={index}>{role}</option>
          ))}

        </select>
      </div>
      <button className='button form__button' type='button' onClick={handleSubmit}>Записаться</button>
      
    </form>
    
  )
}
