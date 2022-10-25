import Product from "./models/Product";

export const products: Product[] = [
  { name: "Gummy Bears", price: 4 },
  { name: "Gummy Worms", price: 5 },
  { name: "Peach Rings", price: 6 },
  { name: "Cola Gummies", price: 3 },
  { name: "Gummy Worms XL", price: 10 },
];

export const calcAverageProductPrice = (array: Product[]) => {
  let averagePrice: number = 0;
  let numberForDivison: number = array.length;
  array.forEach((i) => {
    averagePrice += i.price;
  });
  if (array === undefined) {
    return 0;
  } else {
    return averagePrice / numberForDivison;
  }
};
