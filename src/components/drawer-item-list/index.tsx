import { useContext } from "react";
import { Products } from "../../types/products/ index";
import { GlobalContext } from "../../context/global";
import { X } from "@phosphor-icons/react";

const DrawerItem = ({ item }: { item: Products }) => {
  const { updateCartItemQuantity } = useContext(GlobalContext);

  const handleQuantityChange = (key: "add" | "reduce", quantity?: number) => {
    updateCartItemQuantity(item.id, key, quantity);
  };

  return (
    <div className="grid grid-cols-4 justify-start items-center w-full border-b-[1px] pb-2 h-[90px] gap-10 mt-2">
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="w-[45px]">
          <img src={item.images[0].url} alt="" />
        </div>
        <div className="truncate w-[100px]">{item.name}</div>
      </div>

      <div className="flex flex-row gap-4 mx-l-10">
        <div>Qdt:</div>

        <button
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold p-2 h-6 rounded flex items-center justify-center"
          onClick={() => handleQuantityChange("reduce", -1)}
        >
          -
        </button>
        <div>
          <span>{item.quantity}</span>
        </div>
        <button
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold p-2 h-6 rounded flex items-center justify-center"
          onClick={() => handleQuantityChange("add", 1)}
        >
          +
        </button>
      </div>

      <div className="flex flex-row justify-start items-center gap-4 mx-10">
        <div>Subtotal:</div>
        <div className="flex flex-row justify-start items-center">
          <span>R$:</span> <span>{item.subTotal}</span>
        </div>
      </div>

      <div
        className="flex flex-row justify-start items-start gap-4 ms-20 cursor-pointer"
        onClick={() => handleQuantityChange("reduce", -item.quantity)}
      >
        <X size={24} />
      </div>
    </div>
  );
};

const DrawerItemList = ({ item }: { item: Products[] }) => {
  return (
    <>
      {item.map((item) => (
        <DrawerItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default DrawerItemList;
