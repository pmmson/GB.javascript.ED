"use strict";
// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 25 / 100;
}

let myProduct = new Product("газвода", 70);
console.log(`Старая цена продукта ${myProduct.name} равна ${myProduct.price}`)
myProduct.make25PercentDiscount();
console.log(`Новая цена продукта ${myProduct.name} равна ${myProduct.price}`)
