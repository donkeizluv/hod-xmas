"use client";

import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import ChakraProvider from "../Providers/ChakraProvider";
import WalletProvider from "../Providers/WalletProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider>
      <WalletProvider>
        <NavBar
          mx={{
            base: "0",
            md: "5vw",
          }}
          minW={{
            base: "100vw",
            md: "calc(100% - 10vw)",
          }}
          borderRadius={{
            base: "0",
            md: "16px",
          }}
          border="1px solid var(--chakra-colors-white-20)"
          borderX={{
            base: "none",
            md: "1px solid var(--chakra-colors-white-20)",
          }}
          minH="5rem"
          px="1.25rem"
          mt="1.25rem"
          zIndex="3"
        />
        <main>{children}</main>
        <Footer minH="18rem" py="3rem" px="5vw"></Footer>
      </WalletProvider>
    </ChakraProvider>
    </DndProvider>
  );
}
