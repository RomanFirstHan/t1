import React, { useState } from "react";
import './styles/App.css'
import BodySteps from "./components/BodySteps";
import StepN1 from "./components/StepN1";
import StepN2 from './components/StepN2';
import StepN3 from './components/StepN3';
import StepN4 from './components/StepN4';
import StepN5 from "./components/StepN5";
import StepN6 from "./components/StepN6";




function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [roles, setRoles] = useState([])
  const [answer, setAnswer] = useState('')

  const [currentStep, setCurrentStep] = useState(1)


  const handleIncreaseStep = () => setCurrentStep(currentStep + 1)

  const step1 = <StepN1 setEmail={setEmail} setLastName={setLastName} setRoles={setRoles} setName={setName} roles={roles} handleIncreaseStep={handleIncreaseStep} />
  const step2 = <StepN2  setAnswer = {setAnswer} name={name} lastName={lastName} email={email} setLastName={setLastName} setRoles={setRoles} setName={setName} roles={roles} handleIncreaseStep={handleIncreaseStep} />

  const step3 = <StepN3 setAnswer={setAnswer} answer ={answer} email={email} handleIncreaseStep={handleIncreaseStep}/>
  const step4 = <StepN4 answer={answer} handleIncreaseStep={handleIncreaseStep}/>
  const step5 = <StepN5 answer={answer} handleIncreaseStep={handleIncreaseStep} email={email} setAnswer={setAnswer}/>
  const step6 = <StepN6 answer={answer}/>
  // const step5 = <StepN5 />
  // const step6 = <StepN6 />


  return (
    <div className="App">
      {currentStep === 1 && <BodySteps title='1' body={step1} />}
      {currentStep === 2 && <BodySteps title='2' body={step2} />}
      {currentStep === 3 && <BodySteps title='3' body={step3} />}
      {/* <BodySteps title='3' body={step3} /> */}
      {currentStep === 4 && <BodySteps title='4' body={step4} />}
      {currentStep === 5 && <BodySteps title='5' body={step5} />}
      {currentStep === 6 && <BodySteps title='6' body={step6} />}
    </div>
  );
}

export default App;
