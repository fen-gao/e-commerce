import { useContext } from "react";
import { Products } from "../../types/products";
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
      className="w-full max-w-[335px] h-[100%] max-h-[400px] flex flex-col justify-start items-center border p-8"
    >
      <div className="w-full h-full">
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
      </div>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        onClick={() => handleClick(item)}
      >
        Adicinar
      </button>
    </div>
  );
}

export function ProductList({ products }: ProductListProps) {
  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-between items-center">
          Carregado Produtos...
        </div>
      ) : (
        <div className="animeRight grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
