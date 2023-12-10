import GroupContacts from "@/components/GroupContacts";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  VStack,
  Text,
} from "@chakra-ui/react";
import NavLinks from "./NavLinks";

export type NavMenuDrawerProps = Omit<DrawerProps, "children"> & {
  isOpen: boolean;
  onClose: () => void;
};

const NavMenuDrawer = ({ isOpen, onClose, ...props }: NavMenuDrawerProps) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" {...props}>
      <DrawerOverlay />
      <DrawerContent bgColor="background">
        <DrawerCloseButton size="xl" m="1.5rem" />
        <DrawerBody>
          <VStack h="80svh" alignContent="space-between" my="6rem">
            <VStack flexGrow="1" gap="2rem">
              <NavLinks />
              {/* <WalletButton flexGrow="1" size="app.sm" variant="secondary" /> */}
            </VStack>

            <VStack flexGrow="1" gap="0.75rem" justifyContent="end">
              <Box>
                <Text textAlign="center" color="primary.500" size="c">
                  Contact with us via
                </Text>
              </Box>
              <Box>
                <GroupContacts />
              </Box>
            </VStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenuDrawer;
