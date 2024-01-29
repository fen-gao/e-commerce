import { useQuery } from "react-query";
import axios from "axios";
import { DocumentNode, print } from "graphql";
import { ProductsResponse } from "../types/products/ index";
import {
  FEMALE_PRODUCTS_QUERY,
  MALE_PRODUCTS_QUERY,
  PRODUCTS_QUERY,
  UNISEX_PRODUCTS_QUERY,
} from "../api";

type HygraphResponse<T> = {
  data: T;
};

export type ProductType = "all" | "female" | "male" | "unisex";

export const useHygraphQuery = <T>(query: DocumentNode, cacheName: string) => {
  return useQuery<HygraphResponse<T>, Error>([cacheName, query], async () => {
    const response = await axios.post(
      import.meta.env.VITE_HYGRAPH_URL,
      JSON.stringify({ query: print(query) }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`,
          Accept: "application/json",
        },
      }
    );

    return response.data;
  });
};

export const useProductsQuery = (productType: ProductType) => {
  let query: DocumentNode;
  let cacheName: string;

  switch (productType) {
    case "female":
      query = FEMALE_PRODUCTS_QUERY;
      cacheName = "femaleProducts";
      break;
    case "male":
      query = MALE_PRODUCTS_QUERY;
      cacheName = "maleProducts";
      break;
    case "unisex":
      query = UNISEX_PRODUCTS_QUERY;
      cacheName = "unisexProducts";
      break;
    case "all":
    default:
      query = PRODUCTS_QUERY;
      cacheName = "allProducts";
  }

  const { data, isLoading, error } = useHygraphQuery<ProductsResponse>(
    query,
    cacheName
  );

  return { data, isLoading, error };
};
