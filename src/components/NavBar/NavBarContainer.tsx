import { Flex, FlexProps } from "@chakra-ui/react";

type NavBarContainerProps = FlexProps;
const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      position="fixed"
      backdropFilter="auto"
      backdropBlur="64px"
      bg="white.5"
      boxShadow="0px 4px 56px 0px rgba(0, 0, 0, 0.25)"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
