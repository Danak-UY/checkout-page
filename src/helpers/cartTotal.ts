import { Product } from "../models/Product";

export const calculateTotal = (
  products: Product[],
  shippingPrice: number
): number => {
  return products.reduce(
    (total, product) => total + product.quantity * product.currentPrice,
    shippingPrice
  );
};

export const calculateShipping = (country: string) => {
  let hash = 0;

  for (let i = 0; i < country.length; i++) {
    hash = (hash << 5) - hash + country.charCodeAt(i);
    hash |= 0;
  }

  const formattedPrice = (Math.abs(hash) / 1000 + country.length)
    .toFixed(2)
    .split("")
    .reverse()
    .join("");

  return parseFloat(formattedPrice);
};
