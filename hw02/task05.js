"use strict";
/**
 * Универсальная функция простых арифметических операций
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 */
function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = summ(arg1, arg2);
            break;
        case "-":
            result = diff(arg1, arg2);
            break;
        case "*":
            result = multi(arg1, arg2);
            break;
        case "/":
            result = div(arg1, arg2);
            break;
        default:
            result = "Не задан оператор!";
            break;
    }
    return result;
}

alert(`Сумма 1 и 2 равна ${mathOperation(1, 2, "+")}`);
alert(`Разность 1 и 2 равна ${mathOperation(1, 2, "-")}`);
alert(`Произведение 1 на 2 равно ${mathOperation(1, 2, "*")}`);
alert(`Деление 1 на 2 равно ${mathOperation(1, 2, "/")}`);
alert(`Деление 1 на 0 равно ${mathOperation(1, 0, "/")}`);
alert(`Сумма 1 и 0 равна без оператора ${mathOperation(1, 0)}`);