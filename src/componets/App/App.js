import logo from '../../img/logo.svg';
import './App.css';
import Calculator from '../Calculator/Calculator';
import React, {useState} from 'react';

function App() {
  const [calculatorId, setCalculatorId] = useState(1);

  console.log(calculatorId);
  return (
    <div className="app">
      <header>
        <img alt="SPLITTER logo" src={logo} />
      </header>
      <Calculator key={calculatorId} resetCalculator={() => setCalculatorId(calculatorId + 1)} />
    </div>
  );
}

export default App;
