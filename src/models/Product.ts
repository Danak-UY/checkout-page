export interface Product {
  id: string;
  name: string;
  currentPrice: number;
  prevPrice?: number;
  image: string;
  quantity: number;
}
