import { useContext } from "react";
import { Products } from "../../types/products/ index";
import { GlobalContext } from "../../context/global";
import { DrawerContext } from "../../context/drawer";

interface ProductListProps {
  products: Products[];
}

function ProductItem({ item }: { item: Products }) {
  const { handleAddToCart } = useContext(GlobalContext);
  const { toggleDrawer } = useContext(DrawerContext);

  const handleClick = (item: Products) => {
    handleAddToCart(item);
    toggleDrawer();
  };

  return (
    <div
      key={item.id}
      className="w-full max-w-[335px] h-[100%] flex flex-col justify-start items-start"
    >
      <div className="w-full">
        {item.images[0] && (
          <img
            src={item.images[0].url}
            alt={item.name}
            className="w-full block"
          />
        )}
      </div>
      <div className="font-bold text-sm mt-2">{item.name}</div>
      <div className="text-gray-500 mt-2">{item.price}</div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => handleClick(item)}
      >
        Adicinar
      </button>
    </div>
  );
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
