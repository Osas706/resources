import { createContext, useContext, useState, type ReactNode } from "react";

type NavbarContextType = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </NavbarContext.Provider>
  );
};
