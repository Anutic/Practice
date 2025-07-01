"use strict";
function getCar(car) {
    if ("model" in car && "year" in car) {
        return `Car: ${car.brand} ${car.model}, Year: ${car.year}`;
    }
    else {
        return `Brand: ${car.brand}`;
    }
}
const fullCar = { brand: "Toyota", model: "Camry", year: 2020 };
const brandOnly = { brand: "Honda" };
console.log(getCar(fullCar));
console.log(getCar(brandOnly));
