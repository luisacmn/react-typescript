import { SearchForm } from "../SearchForm/SearchForm";
import { PriceColor, TableContainer, TableContent } from "./styles";

export function Table() {
  return (
    <TableContainer>
      <SearchForm />
      <TableContent>
        <tbody>
          <tr>
            <td width="50%">Website Development</td>
            <td>
              <PriceColor variant="income">$ 12.000,00</PriceColor>
            </td>
            <td>Service</td>
            <td>02/02/24</td>
          </tr>
          <tr>
            <td width="50%">Dinner</td>
            <td>
              <PriceColor variant="outcome">- $ 200,00</PriceColor>
            </td>
            <td>Food</td>
            <td>12/02/24</td>
          </tr>
        </tbody>
      </TableContent>
    </TableContainer>
  );
}
