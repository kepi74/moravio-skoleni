export interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export type Products = Array<Product>;
