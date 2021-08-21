import './PeopleCountInput.css';
import PeopleIcon from '../../img/icon-person.svg';
import React from 'react';

function PeopleCountInput({value, setValue}) {

    const handleOnChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="bill-input">
        <label htmlFor="bill-amount">Number of People</label>
        <img className="input-icon" alt="People Icon" src={PeopleIcon} />
        <input value={value > 0 ? value : ''} onChange={handleOnChange} name="bill-amount" type='number' placeholder='0' />
    </div>

    )
}

export default PeopleCountInput;