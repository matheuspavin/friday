'use strict';


const setAddress = function (address) {
    const regexNumberLast = /(?=.*?)\s(?=[0-9])/gi;
    const regexAddressWithNo = /No\s.+[0-9]/gi;
    const regexNumberInit = /[0-9].{0,3}\s/gi;
    let formattedAddress = [];

    address = address.replace(', ', ' ');

    if (regexNumberInit.test(address.substring(0,4))) {
        let addresscutted = address.split(' ');
        let addressWithNoFirst = address.split(regexNumberInit);
        formattedAddress.push(addressWithNoFirst[1]);
        formattedAddress.push(addresscutted[0]);
    } else if (regexAddressWithNo.test(address)) {
        let addressWithNo = address.split(/\s(?=No)/gi);
        formattedAddress.push(addressWithNo[0]);
        formattedAddress.push(addressWithNo[1]);
    } else {
        formattedAddress = address.split(regexNumberLast);
    }
    
    return formattedAddress;
};

module.exports = {
    setAddress
};
