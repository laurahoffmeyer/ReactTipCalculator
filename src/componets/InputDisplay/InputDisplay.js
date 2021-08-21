import './InputDisplay.css';
import BillInput from '../BillInput/BillInput';
import PeopleCountInput from '../PeopleCountInput/PeopleCountInput';
import TipDisplay from '../TipDisplay/TipDisplay';
import React from 'react';

const InputDisplay = (props) => {
    
    return (
        <div className="input-display">
            <BillInput value={props.billAmount} setValue={props.setBillAmount} /> 
            <TipDisplay customTipValue={props.customTipAmount} setCustomTipValue={props.setCustomTipAmount} buttonValue={props.tipAmount} setButtonValue={props.setTipAmount} />
            <PeopleCountInput value={props.numberOfPeople} setValue={props.setNumberOfPeople} />
        </div>
    )
}

export default InputDisplay;
