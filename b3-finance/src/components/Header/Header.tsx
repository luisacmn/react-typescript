import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                B3 Finance
                <NewTransactionButton>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}