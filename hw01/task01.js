"use strict";

/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
alert("Конвертер температуры в градусах по Цельсию в по Фаренгейту!");
let tC = +prompt("Введите температуру по Цельсию:");
let tF = (9 / 5) * tC + 32;
alert("По Фаренгейту:" + tF);
