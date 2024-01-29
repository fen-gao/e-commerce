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
      <div className="w-full h-full max-w-[200px]">
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
        <div className="text-gray-500 mt-2">R$ {item.price}</div>
      </div>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        onClick={() => handleClick(item)}
      >
        Adicionar
      </button>
    </div>
  );
}

export function ProductList({ products }: ProductListProps) {
  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      {isLoading ? (
        <h1 className="w-full h-full flex justify-between items-center font-bold">
          Carregado Produtos...
        </h1>
      ) : products.length === 0 ? (
        <h1 className="w-full h-full flex justify-between items-center font-bold">
          Nenhum item encontrado
        </h1>
      ) : (
        <div className="animeRight grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
