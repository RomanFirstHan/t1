import React, {useState} from "react";
import './styles/App.css'
import BodySteps from "./components/BodySteps";
import StepN1 from "./components/StepN1";


function App() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [roles, setRoles] = useState([])
  

  const step1 = <StepN1 email = {setEmail} lname ={setLastName} roles={setRoles} fname ={setName}/>

  return (
    <div className="App">
      <BodySteps title='Шаг 1' body = {step1} />
    </div>
    
  );
}

export default App;
