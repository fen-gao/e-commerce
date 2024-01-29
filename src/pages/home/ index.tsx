import { ProductList } from "../../components/list";
import { Products } from "../../types/products";

export const Home = ({ productList }: { productList: Products[] }) => {
  return <ProductList products={productList} />;
};

export default Home;
