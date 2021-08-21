import './BillInput.css';
import dollarSign from '../../img/icon-dollar.svg';
import React from 'react';

function BillInput({value, setValue}) {

    const handleOnChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="bill-input">
            <label htmlFor="bill-amount">Bill</label>
            <img className="input-icon" alt="Dollar Sign" src={dollarSign} />
            <input value={value > 0 ? value : ''} onChange={handleOnChange} name="billAmount" type='number' placeholder='0' />
        </div>
    )
}

export default BillInput;