import { ProductList } from "../../components/list";
import { Products } from "../../types/products";

export const Accessories = ({ productList }: { productList: Products[] }) => {
  return <ProductList products={productList} />;
};
