import ProductList from "../../components/list";
import { Products } from "../../types/products/ index";

const Female = ({ productList }: { productList: Products[] }) => {
  return <ProductList products={productList} />;
};

export default Female;
