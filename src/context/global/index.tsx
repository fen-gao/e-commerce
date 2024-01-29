import { createContext, useEffect, useMemo, useState } from "react";
import {
  GlobalContextProps,
  GlobalContextProviderProps,
  OptionsType,
} from "../../types/global";
import { ProductType, useProductsQuery } from "../../hooks/use-query-hygraph";
import useProductsPathName from "../../hooks/use-products";
import { Products } from "../../types/products";
import { options } from "../../utils/options";

export const GlobalContext = createContext({} as GlobalContextProps);

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [cart, setCart] = useState<Products[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCartToLocalStorage = (cartItems: Products[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const amountCart = useMemo(() => {
    return cart.length;
  }, [cart.length]);

  const total = useMemo(() => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }, [cart]);

  const queryNameValue = useProductsPathName();

  const amoutPrice = useMemo(() => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }, [cart]);

  const {
    data: products,
    isLoading = false,
    error,
  } = useProductsQuery(`${queryNameValue as ProductType}`);

  const productList = useMemo(
    () => products?.data?.products ?? [],
    [products?.data?.products]
  );

  const [filteredProductList, setFilteredProductList] =
    useState<Products[]>(productList);

  const handleFilterProductsByName = (value: string) => {
    const lowerCaseValue = value.toLowerCase();
    setFilteredProductList(
      productList.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseValue)
      )
    );
  };

  const handleSort = (sortOption: OptionsType) => {
    const key = options.find((option) => option.value === sortOption)?.key;

    setFilteredProductList(
      [...filteredProductList].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        const orderFilterCandidate =
          sortOption === "menor" ? a.price - b.price : b.price - a.price;

        const dateFilterCandidate =
          sortOption === "menos" ? dateA - dateB : dateB - dateA;

        return key === "createdAt" ? dateFilterCandidate : orderFilterCandidate;
      })
    );
  };

  const handleAddToCart = (product: Products) => {
    const existingProduct = cart.find(
      (productCandidate) => productCandidate.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((productCandidate) =>
          productCandidate.id === product.id
            ? {
                ...productCandidate,
                quantity: productCandidate.quantity + 1,
                subTotal: (productCandidate.quantity + 1) * product.price,
              }
            : productCandidate
        )
      );
    } else {
      const subTotal = product.price;
      setCart([...cart, { ...product, quantity: 1, subTotal }]);
    }

    saveCartToLocalStorage(cart);
  };

  const updateCartItemQuantity = (
    productId: string,
    key: "add" | "reduce",
    quantity?: number
  ) => {
    setCart((currentCart) => {
      return currentCart.reduce((newCart, product) => {
        if (product.id === productId) {
          const quantityChange = key === "add" ? quantity : quantity;
          const newQuantity = Math.max(product.quantity + quantityChange!, 0);

          if (newQuantity > 0) {
            newCart.push({
              ...product,
              quantity: newQuantity,
              subTotal: newQuantity * product.price,
            });
          }
        } else {
          newCart.push(product);
        }
        return newCart;
      }, [] as Products[]);

      saveCartToLocalStorage(cart);
    });
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <GlobalContext.Provider
      value={{
        handleFilterProductsByName,
        filteredProductList,
        handleSort,
        handleAddToCart,
        amountCart,
        cart,
        total,
        updateCartItemQuantity,
        handleClearCart,
        amoutPrice,
        error,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
