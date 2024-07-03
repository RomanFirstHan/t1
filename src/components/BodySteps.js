import React from 'react'

function BodySteps({title, body}) {
   const numberStep = title
   const bodyStep = body
  return (
    <div className='section container'>
      <section className="block">
         <h2 className='block__title'>{numberStep}</h2>
         <div className="block__body">{bodyStep}</div>
      </section>
    </div>
  )
}

export default BodySteps
