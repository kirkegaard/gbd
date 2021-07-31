import { createContext, useState, useContext } from "react";
import { initialData, options } from "./store.data";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <StoreContext.Provider value={{ data, setData, options }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreContext");
  }
  return context;
};

export { StoreProvider, useStore };
