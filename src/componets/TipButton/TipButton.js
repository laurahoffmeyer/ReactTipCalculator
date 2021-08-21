import './TipButton.css';
import React from 'react';

function TipButton({value, setValue, customTipValue, setCustomTipValue}) {

    const handleOnClick = e => {
        setValue(e.target.value);
        setCustomTipValue('');
    }
    
    return (
        <div className="tip-button tip-child">
            <input onClick={handleOnClick} type="radio" id={value} name="tipButton" value={value} />
            <label className={customTipValue !== '' ? "inactive" : "active"} htmlFor={value}>{value}%</label>
        </div>
    )
}

export default TipButton;