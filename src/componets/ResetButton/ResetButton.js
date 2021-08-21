import './ResetButton.css';
import React from 'react';

function ResetButton(props) {
    return (
        <div className="reset-button">
            <button disabled={props.isDisabled} className={props.isDisabled ? 'inactive' : 'active'} onClick={props.onClick}>RESET</button>
        </div>
    )
}

export default ResetButton;