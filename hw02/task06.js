"use strict";

let amount = +prompt("Введите кол-во денег к зачислению");

let lastDigitAmount = amount % 10;
let nextDigitAfterLast = parseInt(amount / 10) % 10;
let suffix;

switch (true) {
    case (lastDigitAmount == 1) && (nextDigitAfterLast != 1):
        suffix = "рубль";
        break;
    case (lastDigitAmount >= 2 && lastDigitAmount <= 4) && (nextDigitAfterLast != 1):
        suffix = "рубля";
        break;
    default:
        suffix = "рублей";
        break;
}

alert(`Ваша сумма в ${amount} ${suffix} успешно зачислена.`);