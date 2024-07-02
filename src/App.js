import React from "react";
import './styles/App.css'
import BodySteps from "./components/BodySteps";
import StepN1 from "./components/StepN1";


function App() {

  const step1 = <StepN1 />
  return (
    <div className="App">
      <BodySteps title='Шаг 1' body = {step1} />
    </div>
    
  );
}

export default App;
