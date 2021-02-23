"use strict";

let a = parseInt(Math.random() * (10 - (-10)) + (-10));
let b = parseInt(Math.random() * (10 - (-10)) + (-10));
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    alert(a + b);
}
