import { ReactNode } from "react";
import { Products } from "../products";

export type OptionsType = "menor" | "maior" | "mais" | "menos";

export interface GlobalContextProps {
  total: number;
  cart: Products[];
  amountCart: number;
  amoutPrice?: number;
  filteredProductList: Products[];
  handleFilterProductsByName: (value: string) => void;
  handleSort: (sortOption: OptionsType) => void;
  handleAddToCart: (product: Products) => void;
  updateCartItemQuantity: (
    productId: string,
    key: "add" | "reduce",
    quantity?: number
  ) => void;
  handleClearCart: () => void;
}

export interface GlobalContextProviderProps {
  children: ReactNode;
}
