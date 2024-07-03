import React, { useState } from "react";
import './styles/App.css'
import BodySteps from "./components/BodySteps";
import StepN1 from "./components/StepN1";
import StepN2 from './components/StepN2'


function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [roles, setRoles] = useState([])

  const [currentStep, setCurrentStep] = useState(1)

  const handleIncreaseStep = () => setCurrentStep(currentStep + 1)

  const step1 = <StepN1 setEmail={setEmail} setLastName={setLastName} setRoles={setRoles} setName={setName} roles={roles} handleIncreaseStep={handleIncreaseStep} />
  const step2 = <StepN2 email={email} setLastName={setLastName} setRoles={setRoles} setName={setName} roles={roles} handleIncreaseStep={handleIncreaseStep} />

  return (
    <div className="App">
      {currentStep === 1 && <BodySteps title='1' body={step1} />}
      {currentStep === 2 && <BodySteps title='2' body={step2} />}
    </div>
  );
}

export default App;
