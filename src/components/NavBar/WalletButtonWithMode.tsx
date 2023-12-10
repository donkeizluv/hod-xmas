import { ButtonProps } from "@chakra-ui/react";
import { EmptyWallet } from "@/components/Icons";
import { WalletButton } from "@/components/WalletButton";
import { useWallet } from "@solana/wallet-adapter-react";

export type WalletButtonWithMode = ButtonProps & {
  mode?: WalletButtonMode;
};

export type WalletButtonMode = "mini" | "normal";

const WalletButtonWithMode = ({ mode }: WalletButtonWithMode) => {
  const { connected } = useWallet();
  const buttonMode = mode || "normal";

  if (buttonMode === "mini")
    return (
      <WalletButton
        size="app.sm"
        variant={connected ? "secondary" : "unstyled"}
        border="none"
      >
        {!connected && <EmptyWallet />}
      </WalletButton>
    );

  return <WalletButton size="app.sm" variant="secondary" />;
};

export default WalletButtonWithMode;
