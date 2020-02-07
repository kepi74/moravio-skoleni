import * as React from "react";
import ProductItem from "./ProductItem";
import { Product } from "@pck/api/src/types";

const product: Product = {
  name: "roční - R pro vozidla do 3,5t",
  price: 1500,
  description: `Platnost kupónů je od 1. prosince do 31. ledna roku následujícího
    po roce, kterého se emise týká, tedy 14 měsíců.`,
  imageUrl:
    "https://www.ceskaposta.cz/documents/10180/6007857/REVERZ-R2020_big.jpg/cda21a40-ef6e-ed88-eaf1-b5ec607faa2e?t=1574151087612"
};

export default {
  title: "Product"
};

export const productItem = () => <ProductItem product={product} />;
