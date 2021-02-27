"use strict";

"use strict";
// es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 25 / 100;
    }
}

let myProduct = new Product("газвода", 70);
console.log(`Старая цена продукта ${myProduct.name} равна ${myProduct.price}`)
myProduct.make25PercentDiscount();
console.log(`Новая цена продукта ${myProduct.name} равна ${myProduct.price}`)
