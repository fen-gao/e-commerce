import { useMemo } from "react";
import Home from "../pages/home/ index";
import Male from "../pages/male";
import Female from "../pages/famale";
import Unisex from "../pages/unisex";
import { Products } from "../types/products/ index";

export interface MenuItem<P = Record<string, unknown>> {
  route: string;
  label: string;
  component?: React.ComponentType<P>;
  subroutes?: MenuItem[];
  icon?: React.ReactNode;
}

const useMenu = () => {
  const menu: MenuItem<{ productList: Products[] }>[] = useMemo(() => {
    return [
      {
        route: "/",
        label: "Todos os Produtos",
        component: Home,
      },
      {
        route: "/masculino",
        label: "Masculino",
        component: Male,
      },
      {
        route: "/feminino",
        label: "Feminino",
        component: Female,
      },
      {
        route: "/unisex",
        label: "Unisex",
        component: Unisex,
      },
    ];
  }, []);

  return { menu };
};

export default useMenu;
