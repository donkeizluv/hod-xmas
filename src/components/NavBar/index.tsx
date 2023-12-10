"use client";

import {
  Link as ChakraLink,
  Flex,
  FlexProps,
  Image,
  HStack,
  useBreakpointValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import NavBarContainer from "./NavBarContainer";

import WalletButtonWithMode, { WalletButtonMode } from "./WalletButtonWithMode";
import NavMenuDrawer from "./NavMenuDrawer";
import { MenuIcon } from "@components/Icons";
import { useEffect } from "react";
import NavLinks from "./NavLinks";

type NavBarProps = FlexProps;

export default function NavBar({ ...props }: NavBarProps) {
  const pathName = usePathname();
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  const walletButtonMode = useBreakpointValue<WalletButtonMode>(
    {
      base: "mini",
      md: "normal",
    },
    { fallback: "normal" }
  );

  return (
    <NavBarContainer {...props}>
      <NavMenuDrawer isOpen={isOpen} onClose={onClose} />
      <Flex flexGrow="1" justifyContent="left">
        <ChakraLink
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            boxSize="4rem"
            src="/assets/svg/logo.svg"
            alt="HoD logo"
          />
        </ChakraLink>
      </Flex>

      <HStack
        flexGrow="1"
        gap="3.2rem"
        justifyContent="center"
        display={{ base: "none", md: "flex" }}
      >
        <NavLinks />
      </HStack>

      <Flex
        flexGrow={{
          base: "16",
          md: "1",
        }}
        justifyContent="right"
      >
        <WalletButtonWithMode mode={walletButtonMode} />
      </Flex>

      <Flex
        flexGrow="1"
        display={{ base: "flex", md: "none" }}
        justifyContent="right"
      >
        <IconButton
          onClick={onOpen}
          variant="icon"
          aria-label="Navigation menu"
          icon={<MenuIcon />}
        />
      </Flex>
    </NavBarContainer>
  );
}
