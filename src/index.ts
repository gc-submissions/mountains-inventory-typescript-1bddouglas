import { mountains, findNameOfTallestMountain } from "./mountains";
import { products, calcAverageProductPrice } from "./products";
import { inventory, calcInventoryValue } from "./inventory";

const tallestMtn: string = findNameOfTallestMountain(mountains);
console.log(tallestMtn);

const overallAveragePrice: number = calcAverageProductPrice(products);
console.log(overallAveragePrice);

const hereWeGo = calcInventoryValue(inventory);
console.log(hereWeGo);
