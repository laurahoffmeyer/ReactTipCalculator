import logo from '../../img/logo.svg';
import './App.css';
import Calculator from '../Calculator/Calculator';
import React, {useState} from 'react';

function App() {
  const [calculatorId, setCalculatorId] = useState(1);

  return (
    <div className="app">
      <header>
        <img alt="SPLITTER logo" src={logo} />
      </header>
      <Calculator key={calculatorId} resetCalculator={() => setCalculatorId(calculatorId + 1)} />
      <footer>Made with ♥ in Pontiac, MI by <a rel="noreferrer" target="_blank" href="http://laurahoffmeyer.com">Laura Hoffmeyer</a></footer>
    </div>
  );
}

export default App;
