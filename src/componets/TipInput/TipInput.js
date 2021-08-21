import './TipInput.css';
import React from 'react';

function TipInput({value, setValue, buttonValue, setButtonValue}) {

    const handleOnChange = e => {
        // console.log(buttonValue)
        // let lastValue = 0;
        setValue(e.target.value);
        // if(value !== '') {
        //     if(buttonValue !== null && buttonValue > 0) {
        //         lastValue = buttonValue
        //         console.log(lastValue)
        //         setButtonValue(0)
        //     }
        // } else {
        //     setButtonValue(lastValue);
        // }
    }

    return (
        <div className="tip-input tip-child">
            <input value={value > 0 ? value : '' } onChange={handleOnChange} type="number" placeholder="Custom" />
        </div>
    )
}

export default TipInput;