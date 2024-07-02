import React, {useState} from 'react'


function StepN1() {

  // const tap = (e) =>{
  //   e.preventDefault()
  // }

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [roles, setRoles] = useState('')
  const[loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    fetch('http://193.19.100.32:7000/api/get-roles')
    .then(response => response.json())
    .then(result => setRoles(result))
    .catch(err => console.log(err))
    setLoading(false)
    
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__item'>
          <label htmlFor="name" className='form__title'>Имя</label>
          <input type="text" placeholder='Имя' id="name" className='form__input' onChange = {(e) => setName(e.target.value)}/>
        </div>
        <div className='form__item'>
          <label htmlFor="lastName" className='form__title'>Фамилия</label>
          <input type="text" placeholder='Фамилия' id="lastName" className='form__input' onChange = {(e) => setLastName(e.target.value)}/>
        </div>
        <div className='form__item'>
          <label htmlFor="email" className='form__title'>Email</label>
          <input type="email" placeholder='Email' id="email" className='form__input' onChange = {(e) => setEmail(e.target.value)}/>
        </div>
        <button  className='button form__button'>Получить список ролей</button>
      </form>
      <div style={{fontSize: '30px'}}>
        {loading && <p>Loading...</p>}
        {roles}
        </div>
      <div className='form__image'>
        <img src="" alt="" />
      </div>
      </>
  )
}

export default StepN1
