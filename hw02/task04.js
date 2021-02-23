"use strict";

let a = parseInt(Math.random() * (10 - (-10)) + (-10));
let b = parseInt(Math.random() * (10 - (-10)) + (-10));
/**
 * Функция сложения двух чисел
 * @param {number} a 
 * @param {number} b 
 */
function summ(a, b) {
    return a + b;
}
/**
 * Функция произведения двух чисел
 * @param {number} a 
 * @param {number} b 
 */
function multi(a, b) {
    return a * b;
}
/**
 * Функция вычетания двух чисел
 * @param {number} a 
 * @param {number} b 
 */
function diff(a, b) {
    return a - b;
}
/**
 * Функция деления двух чисел
 * @param {number} a 
 * @param {number} b 
 */
function div(a, b) {
    if (b == 0) {
        return "Деление на 0 недопустимо!";
    }
    return a / b;
}

alert(`Сумма ${a} и ${b} равна ${summ(a, b)}`);
alert(`Разница ${a} и ${b} равна ${diff(a, b)}`);
alert(`Произведение ${a} и ${b} равно ${multi(a, b)}`);
alert(`Деление ${a} на ${b} равно ${div(a, b)}`);