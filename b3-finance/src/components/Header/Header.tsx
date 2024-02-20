import { useState } from "react";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        B3 Finance
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton onClick={() => setIsDialogOpen(true)}>
              New Transaction
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onClose={handleDialogClose} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
