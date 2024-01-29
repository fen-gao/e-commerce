import { ShoppingCart } from "@phosphor-icons/react";
import { MenuList } from "../menu";
import { Input } from "../input";
import Select from "../select";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/global";
import { useContext } from "react";
import { OptionsType } from "../../types/global";
import { options } from "../../utils/options";
import { Drawer } from "../drawer";
import { DrawerContext } from "../../context/drawer";
import { DrawerItemList } from "../drawer-item-list";
import { Products } from "../../types/products";

interface NavbarProps {
  handleSearch: (value: string) => void;
}

function SearchBar({
  handleSearch,
}: {
  handleSearch: (value: string) => void;
}) {
  const { handleSort } = useContext(GlobalContext);

  return (
    <>
      <div className="flex flex-row w-full">
        <Input
          customStyle="max-full h-[35px]"
          placeholder="Pesquisar"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
      </div>

      <Select
        options={options}
        onChange={(e) => handleSort(e.target.value as OptionsType)}
        customStyle="block w-full h-[35px] xl:w-[170px]"
      />
    </>
  );
}

const DrawerFooter = ({
  total,
  handleClearCart,
  handleNavigateToCart,
  isDisabled,
}: {
  total: number;
  handleClearCart: () => void;
  handleNavigateToCart: () => void;
  isDisabled: boolean | undefined;
}) => {
  return (
    <div className="flex flex-row gap-4 w-full items-center">
      {total === 0 ? (
        <div className="px-4 h-[42px] bg-gray-900 text-white flex justify-center items-center opacity-50 cursor-not-allowed">
          IR PARA CHECKOUT
        </div>
      ) : (
        <div
          onClick={handleNavigateToCart}
          className="px-4 h-[42px] bg-gray-900 text-white flex justify-center items-center cursor-pointer"
        >
          IR PARA CHECKOUT
        </div>
      )}
      <button
        className={`px-4 h-[42px] bg-red-500 text-white flex justify-center items-center ${
          total === 0 && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleClearCart}
        disabled={isDisabled}
      >
        LIMPAR CARRINHO
      </button>

      <div className="px-4 h-[42px]flex justify-center items-center">
        <span className="font-bold">Total:</span> R$ {total}
      </div>
    </div>
  );
};

const DrawerContent = ({
  cart,
  isDisabled,
}: {
  cart: Products[];
  isDisabled: boolean | undefined;
}) => {
  return isDisabled ? (
    <div className="w-full h-full flex justify-center items-center">
      Seu carrinho esta vazio
    </div>
  ) : (
    <DrawerItemList item={cart} />
  );
};

export const Navbar = ({ handleSearch }: NavbarProps) => {
  const navigate = useNavigate();
  const { toggleDrawer, isDrawerOpen } = useContext(DrawerContext);

  const { cart, total, handleClearCart, amountCart } =
    useContext(GlobalContext);

  const isDisabled = total === 0;

  const handleNavigateToCart = () => {
    if (!isDisabled) {
      toggleDrawer();
      navigate("/checkout");
    }
  };

  return (
    <nav className="flex flex-col mb-10 bg-[#303030]  py-4">
      <div className="container w-full h-full flex flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mx-auto flex-wrap justify-between">
        <div className="flex flex-row gap-4 items-start flex-wrap mb-4 xl:flex-nowrap ">
          <Link to="/" className="text-white font-bold hover:text-gray-300">
            Home
          </Link>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="flex flex-row gap-4 mb-6">
          <button onClick={toggleDrawer} className="relative xl:mt-4">
            <div className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold p-2 h-6 rounded-full flex items-center justify-center absolute -top-4 -right-4 xl:top-[-20px] xl:right-[-20px] sm:top-[30px]">
              {amountCart}
            </div>
            <ShoppingCart size={25} color="#fff" className="cursor-pointer" />
          </button>
        </div>
      </div>

      <MenuList />

      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        title="CARRINHO"
        content={<DrawerContent cart={cart} isDisabled={isDisabled} />}
        footer={
          <DrawerFooter
            total={total}
            handleClearCart={handleClearCart}
            handleNavigateToCart={handleNavigateToCart}
            isDisabled={isDisabled}
          />
        }
      />
    </nav>
  );
};
