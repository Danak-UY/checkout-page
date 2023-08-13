import { Product } from "../models/Product";

export const calculateTotal = (products: Product[]): number => {
  console.log(products.map((p) => p.quantity));
  return products.reduce(
    (total, product) => total + product.quantity * product.currentPrice,
    0
  );
};
