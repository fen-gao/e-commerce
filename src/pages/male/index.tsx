import { ProductList } from "../../components/list";
import { Products } from "../../types/products";

export const Male = ({ productList }: { productList: Products[] }) => {
  return <ProductList products={productList} />;
};

export default Male;
