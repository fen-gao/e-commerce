import { ShoppingCart } from "@phosphor-icons/react";
import MenuList from "../menu";
import Input from "../input";
import Select from "../select";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/global";
import { useContext } from "react";
import { OptionsType } from "../../types/global";
import { options } from "../../utils/options";
import Drawer from "../drawer";
import { DrawerContext } from "../../context/drawer";
import DrawerItemList from "../drawer-item-list";

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
      <div className="flex flex-row">
        <Input
          customStyle="w-[200px] h-[35px]"
          placeholder="Pesquisar"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <Select
        options={options}
        onChange={(e) => handleSort(e.target.value as OptionsType)}
        customStyle="block w-[160px] h-[35px]"
      />
    </>
  );
}

export function Navbar({ handleSearch }: NavbarProps) {
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
    <nav className="flex flex-col mb-10 bg-[#303030]">
      <div className="container flex flex-row justify-between items-center w-full h-[86px] ">
        <div className="flex flex-row gap-4 items-center">
          <Link to="/" className="text-white font-bold hover:text-gray-300">
            Home
          </Link>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={toggleDrawer} className="relative">
            <div className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold p-2 h-6 rounded-full flex items-center justify-center absolute top-[-20px] right-[-20px]">
              {amountCart}
            </div>
            <ShoppingCart size={25} color="#fff" className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-[56px]">
        <MenuList />
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        title="CARRINHO"
        content={
          isDisabled ? (
            <div className="w-full h-full flex justify-center items-center">
              Seu carrinho esta vazio
            </div>
          ) : (
            <DrawerItemList item={cart} />
          )
        }
        footer={
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
        }
      />
    </nav>
  );
}
