import './AmountsDisplay.css';
import React from 'react';

function AmountsDisplay({finalTotal, finalTip}) {
    return (
        <div className="amounts-display">
            <div className="row">
                <div className="labels">
                    <label>Tip Amount</label>
                    <span><small>/ person</small></span>
                </div>
                <div className="amounts">${finalTip}</div>
            </div>
            <div className="row">
                <div className="labels">
                    <label>Total</label>
                    <span><small>/ person</small></span>
                </div>
                <div className="amounts">${finalTotal}</div>
            </div>
        </div>
    )
}

export default AmountsDisplay;