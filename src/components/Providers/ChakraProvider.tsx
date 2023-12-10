import { PropsWithChildren } from "react";
import theme from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as ChakraProviderInternal } from "@chakra-ui/react";

export default function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProviderInternal theme={theme}>{children}</ChakraProviderInternal>
    </CacheProvider>
  );
}
