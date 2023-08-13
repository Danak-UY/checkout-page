import productsCart from "./productsCart.json";

import { Cart } from "../models/Cart";

const getProductsCart = (): Promise<Cart> => {
  return Promise.resolve(productsCart as Cart);
};

export default getProductsCart;
