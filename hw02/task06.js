"use strict";

let amount = +prompt("Введите кол-во денег к зачислению");

let lastDigitAmount = amount % 10;
let nextDigitAfterLast = parseInt(amount / 10) % 10;
let suffix;

if (lastDigitAmount == 1 && nextDigitAfterLast != 1) {
    suffix = "рубль";
} else if ((lastDigitAmount >= 2 && lastDigitAmount <= 4) && (nextDigitAfterLast != 1)) {
    suffix = "рубля";
} else {
    suffix = "рублей";
}

alert(`Ваша сумма в ${amount} ${suffix} успешно зачислена.`);