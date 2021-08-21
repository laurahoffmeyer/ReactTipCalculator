import './Calculator.css';
import InputDisplay from '../InputDisplay/InputDisplay';
import OutputDisplay from '../OutputDisplay/OutputDisplay';
// import useSplitterState from '../../hooks';
import React, {useState} from 'react';
import utils from '../../utils';

function Calculator(props) {

const [billAmount, setBillAmount] = useState(0);
const [tipAmount, setTipAmount] = useState(0);
const [customTipAmount, setCustomTipAmount] = useState(0);
const [numberOfPeople, setNumberOfPeople] = useState(0);

let finalTip = utils.finalTipPerPerson(billAmount,tipAmount,customTipAmount,numberOfPeople);
let finalTotal = utils.finalTotalPerPerson(billAmount,finalTip,numberOfPeople);

  return (
    <div className="calculator">
        <InputDisplay customTipAmount={customTipAmount} setCustomTipAmount={setCustomTipAmount} tipAmount={tipAmount} setTipAmount={setTipAmount} numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} billAmount={billAmount} setBillAmount={setBillAmount} />
        <OutputDisplay onClick={props.resetCalculator} finalTip={finalTip} finalTotal={finalTotal} />
    </div>
  );
}

export default Calculator;