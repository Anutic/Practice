interface Car {
  brand: string;
  model: string;
  year: number;
}

interface BrandOnly {
  brand: string;
}

function getCar(car: Car | BrandOnly): string {
  if ("model" in car && "year" in car) {
    return `Car: ${car.brand} ${car.model}, Year: ${car.year}`;
  } else {
    return `Brand: ${car.brand}`;
  }
}

const fullCar: Car = { brand: "Toyota", model: "Camry", year: 2020 };
const brandOnly: BrandOnly = { brand: "Honda" };

console.log(getCar(fullCar));
console.log(getCar(brandOnly));