import AmountsDisplay from '../AmountsDisplay/AmountsDisplay';
import ResetButton from '../ResetButton/ResetButton';
import './OutputDisplay.css';
import React from 'react';

function OutputDisplay(props) {

    let disabled = props.finalTip === '0.00' && props.finalTotal === '0.00';

    return (
        <div className="output-display">
            <AmountsDisplay finalTip={props.finalTip} finalTotal={props.finalTotal} />
            <ResetButton isDisabled={disabled} onClick={props.onClick} />
        </div>
    )
}

export default OutputDisplay;
