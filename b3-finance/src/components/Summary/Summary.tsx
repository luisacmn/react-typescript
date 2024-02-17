import { CustomArrowCircleDown, CustomArrowCircleUp, CustomCurrency, SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Inputs</span>
                    <CustomArrowCircleUp size={32} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outputs</span>
                    <CustomArrowCircleDown size={32} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CustomCurrency size={32} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}