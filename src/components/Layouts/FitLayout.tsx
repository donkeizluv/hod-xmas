import { FitScreenHeight } from "@/utils/dimensions";
import { Flex, FlexProps } from "@chakra-ui/react";

export default function FitLayout({ children, ...props }: FlexProps) {
  return (
    // fit height = full height - footer height
    <Flex px="5vw" flexDirection="column" minH={FitScreenHeight} {...props}>
      {children}
    </Flex>
  );
}
