import { Product } from "./Product";

export interface Cart {
  products: Product[];
  form: Record<string, string>;
}
