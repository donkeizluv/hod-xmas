import dynamic from "next/dynamic";

export const WalletButton = dynamic(
  async () => (await import("./WalletButtonBase")).WalletButton,
  { ssr: false }
);
