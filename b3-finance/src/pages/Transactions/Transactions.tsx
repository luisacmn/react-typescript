import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { Table } from "../../components/Table/Table";

export function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const response = await fetch("http://localhost:3000/transaction");
    const data = await response.json();

    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <Table transactions={transactions} />
    </div>
  );
}
