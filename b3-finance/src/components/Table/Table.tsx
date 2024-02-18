import { SearchForm } from "../SearchForm/SearchForm";
import { PriceColor, TableContainer, TableContent } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface Props {
  transactions: Transaction[];
}

export function Table({ transactions }: Props) {
  return (
    <TableContainer>
      <SearchForm />
      <TableContent>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceColor variant={transaction.type}>
                    {transaction.price}
                  </PriceColor>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </TableContent>
    </TableContainer>
  );
}
