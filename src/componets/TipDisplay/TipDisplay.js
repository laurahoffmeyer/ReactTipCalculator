import TipButton from '../TipButton/TipButton';
import TipInput from '../TipInput/TipInput';
import React from 'react';
import './TipDisplay.css';

function TipDisplay({customTipValue, setCustomTipValue, buttonValue, setButtonValue}) {

    const tipPercents = [5, 10, 15, 25, 50];

    return (
        <div className="tip-display">
            <label>Select Tip %</label>
            <div className="tip-options">
                {tipPercents.map(tip =>
                    <TipButton key={tip} customTipValue={customTipValue} setCustomTipValue={setCustomTipValue} setValue={setButtonValue} value={tip} />
                )}
                <TipInput buttonValue={buttonValue} setButtonValue={setButtonValue} setValue={setCustomTipValue} value={customTipValue > 0 ? customTipValue : 'Custom'} />
            </div>
        </div>
    )
}

export default TipDisplay;