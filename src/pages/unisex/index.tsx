import ProductList from "../../components/list";
import { Products } from "../../types/products/ index";

const Unisex = ({ productList }: { productList: Products[] }) => {
  return <ProductList products={productList} />;
};

export default Unisex;