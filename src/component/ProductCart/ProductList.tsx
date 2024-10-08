import "./ProductList.css";
import { ReactNode } from "react";

type ProductListProps = {
  children: ReactNode;
};
const ProductList = ({ children }: ProductListProps) => {
  return <div className="product-list">{children}</div>;
};

export default ProductList;
