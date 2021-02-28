"use strict";

let number = +prompt("Введите число от 0 до 999 для разделения на разряды");
let bitNumber = {};

function numberToBitNumber(number) {
    if (isNaN(number)) {
        console.log(`введенное число не является числом`)
        return bitNumber;
    }
    if (!Number.isInteger(number)) {
        console.log(`число ${number} не целое число`)
        return bitNumber;
    }
    if (number < 0 || number > 999) {
        console.log(`число ${number} не входит в диапазон от 0 до 999`)
        return bitNumber;
    }
    bitNumber.units = 0;
    bitNumber.tens = 0;
    bitNumber.hundreds = 0;
    let i = 0;
    while (number != 0) {
        switch (i) {
            case 0:
                bitNumber.units = number % 10;
                break;
            case 1:
                bitNumber.tens = number % 10;
                break;
            case 2:
                bitNumber.hundreds = number % 10;
                break;
            default:
                break;
        }
        number = Math.floor(number / 10);
        i++;
    }
    return bitNumber;
}

bitNumber = numberToBitNumber(number);
console.log(bitNumber);