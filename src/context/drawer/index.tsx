import { createContext, ReactNode, useState } from "react";
import { DrawerContextProps } from "../../types/drawer";

export const DrawerContext = createContext({} as DrawerContextProps);

interface DrawerContextProviderProps {
  children: ReactNode;
}

export const DrawerContextProvider = ({
  children,
}: DrawerContextProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
