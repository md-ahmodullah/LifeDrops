import { createContext, useContext, useState } from "react";

// Create Context
const FundContext = createContext();

// Context Provider
export const FundProvider = ({ children }) => {
  const [amount, setAmount] = useState(null);
  const [totalFunding, setTotalFunding] = useState(null);

  return (
    <FundContext.Provider
      value={{ amount, setAmount, totalFunding, setTotalFunding }}
    >
      {children}
    </FundContext.Provider>
  );
};

// Custom Hook
export const useFund = () => useContext(FundContext);
