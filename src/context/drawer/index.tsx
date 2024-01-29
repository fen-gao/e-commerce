import { createContext, ReactNode, useState } from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerContext = createContext({} as DrawerContextProps);

interface DrawerContextProviderProps {
  children: ReactNode;
}

export function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
