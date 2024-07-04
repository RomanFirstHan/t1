import React, { useState } from 'react'

export default function StepN2({ setAnswer, name, lastName, email, roles, handleIncreaseStep  }) {

  
  const [role, setRole] = useState('');
  
  const body = {
    "last_name": lastName,
    "first_name": name,
    "email": email,
    "role": role
  }

  // const headers = 


  const handleSubmit = async () => {
    // Тут как я понимаю будет другой фетч запрос. Кстати, метод ГЕТ стоит по умолчанию и его можно не прописывать
    fetch('http://193.19.100.32:7000/api/sign-up', {
      'method': 'POST',
      'body': JSON.stringify(body),
       'headers': {'Content-Type': 'application/json'}

    })
      .then(response => response.json())
      .then(result => setAnswer(result))
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
        <select name="" id="roles" className="form__input input" defaultValue={'default'} required onChange={(e)=> setRole(e.target.value)}>
          <option value="default" disabled>Выберите роль</option>
          {roles.map(role => (
             <option value={role} key={role}>{role}</option>
          ))}

        </select>
      </div>
      <button className='button form__button' type='button' onClick={handleSubmit}>Записаться</button>
      
    </form>
    
  )
}
