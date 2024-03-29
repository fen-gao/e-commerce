import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import { Products } from "../../types/products";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Gutter = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-10 flex-1"></div>
  );
};

const HeaderCheckout = ({ cartProducts }: { cartProducts: Products[] }) => {
  return (
    <>
      {cartProducts.length > 0 && (
        <div className="grid grid-cols-2 w-full justify-between mb-10  font-bold">
          <Gutter />

          <div className="flex flex-row items-start justify-evenly gap-32">
            <div className="flex justify-start w-[100px]">Preço</div>
            <div className="">Qdt.</div>
            <div className="">Total</div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductListCheckout = ({
  cartProducts,
  updateCartItemQuantity,
}: {
  cartProducts: Products[];
  updateCartItemQuantity: (
    id: string,
    key: "add" | "reduce",
    quantity?: number
  ) => void;
}) => {
  return (
    <>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-2 w-full justify-between mb-10 border-t border-gray-300 pt-5"
        >
          <div className="flex flex-row justify-start items-center gap-10 flex-1">
            <div className="w-20 h-20">
              <img src={product.images[0].url} alt="" />
            </div>
            <div>
              <span>{product.name}</span>
              <div
                className="text-red-500 cursor-pointer"
                onClick={() =>
                  updateCartItemQuantity(
                    product.id,
                    "reduce",
                    -product.quantity
                  )
                }
              >
                Remover
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-evenly gap-32">
            <div className="flex justify-start w-[100px]">
              R$ {product.price}
            </div>
            <div className="">{product.quantity}</div>
            <div className="">R$ {product.price * product.quantity}</div>
          </div>
        </div>
      ))}
    </>
  );
};

const CheckoutActions = ({
  amoutPrice,
  finalizePurchase,
  cartProducts,
}: {
  amoutPrice: number | undefined;
  cartProducts: Products[];
  finalizePurchase: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 w-full justify-between mb-10 ">
        <Gutter />

        <div className="flex flex-row items-start justify-end gap-32">
          <div className="flex flex-row justify-end w-full">
            <span>
              <span className="font-bold">Subtotal: </span> {`R$ ${amoutPrice}`}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full justify-between mb-10 ">
        <div className="flex flex-row justify-start items-center gap-10 flex-1"></div>

        <div className="flex flex-row items-start justify-end gap-32">
          <div className="flex flex-row justify-end w-full gap-4">
            <button
              className="font-normal bg-transparent text-black py-2 px-4 rounded border border-gray-900"
              onClick={() => navigate("/")}
            >
              Voltar à loja
            </button>
            <button
              onClick={finalizePurchase}
              className={`bg-gray-900 text-white font-bold py-2 px-4 rounded ${
                cartProducts.length === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={cartProducts.length === 0}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Checkout = ({ cartProducts }: { cartProducts: Products[] }) => {
  const { updateCartItemQuantity, amoutPrice, handleClearCart } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const finalizePurchase = () => {
    toast.success("Compra realizada com sucesso!");

    handleClearCart();

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <h1 className="text-3xl">Seu carrinho</h1>

          <HeaderCheckout cartProducts={cartProducts} />

          <div>
            {cartProducts.length === 0 && (
              <div className=" flex  flex-col gap-6 mt-10">
                <p>Seu carrinho está vazio no momento.</p>
                <p>Continue navegando aqui.</p>
              </div>
            )}

            <ProductListCheckout
              cartProducts={cartProducts}
              updateCartItemQuantity={updateCartItemQuantity}
            />

            <CheckoutActions
              amoutPrice={amoutPrice}
              finalizePurchase={finalizePurchase}
              cartProducts={cartProducts}
            />
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
