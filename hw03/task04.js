"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
/**
 * Функция проверки продуктов на наличие фотографий
 * @param {object} product 
 */
function hasPhotos(product) {
    if ("photos" in product) {
        return product.photos.length != 0;
    }
}

let productsWithPhoto = products.filter(hasPhotos);
console.log(productsWithPhoto);
/**
 * Функция сортировки продуктов по возрастанию цены
 * @param {object} product1 
 * @param {object} product2 
 */
function sortPriceUp(product1, product2) {
    return product1.price - product2.price;
}

products.sort(sortPriceUp);
console.log(products);