'use strict';


const setAddress = function (adress) {
    const regex = /.*?[ˆa-z]/g;
    let setUpAddress = adress.map(plainAddress => {
        return regex.exec(plainAddress);
        
    });
};

