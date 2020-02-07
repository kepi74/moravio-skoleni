import * as React from "react";
import { Card } from "antd";
import { Product } from "@pck/api/src/types";

export interface ProductItemProps {
  product: Product;
}

const { Meta } = Card;
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      cover={<img alt={product.name} src={product.imageUrl} />}
      extra={<div>{product.price}</div>}
    >
      <Meta title={product.name} description={product.description} />
    </Card>
  );
};

export default ProductItem;
