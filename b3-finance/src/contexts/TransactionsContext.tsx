import { ReactNode, createContext, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const url = "http://localhost:3000/transaction";

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
