"use strict";

console.log("Task03");

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 15;
products.forEach(function (product) {
    product.price = product.price * (1 - discount / 100);
});

console.log(products);