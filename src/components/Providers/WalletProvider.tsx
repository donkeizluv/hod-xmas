"use client";

import { getEndpoint } from "@/utils/env";
import {
  ConnectionProvider,
  WalletProvider as WalletProviderInternal,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PropsWithChildren, useMemo } from "react";

export default function WalletProvider({ children }: PropsWithChildren) {
  const endpoint = useMemo(() => getEndpoint(), []);

  // extra adapters add here
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProviderInternal wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProviderInternal>
    </ConnectionProvider>
  );
}
