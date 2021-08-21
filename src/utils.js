const utils = {
    finalTipPerPerson: (billAmount, buttonTip, customTip, numberOfPeople) => {
        if(billAmount > 0 && billAmount !== null && (buttonTip !== null || (customTip > 0 && customTip !== null)) && numberOfPeople > 0 && numberOfPeople !== null) {
            let finalTip = customTip === null || customTip === '' ? ((buttonTip / 100) * billAmount) / numberOfPeople : customTip / numberOfPeople;
            return Math.round(100*finalTip)/100; 
        } else {
            return '0.00';
        }
    },
    finalTotalPerPerson: (billAmount, finalTipAmountPerPerson, numberOfPeople) => {
        if(finalTipAmountPerPerson > 0) {
            let finalTotal = (billAmount / numberOfPeople) + finalTipAmountPerPerson;
            return Math.round(100*finalTotal)/100; 
        } else {
            return '0.00';
        }
    }  
}

export default utils;