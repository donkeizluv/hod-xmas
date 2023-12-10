import {
  Stack,
  Link,
  Text,
  Image,
  Box,
  HStack,
  FlexProps,
  Flex,
} from "@chakra-ui/react";
import GroupContacts from "@components/GroupContacts";

type FooterProps = FlexProps;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer>
      <Flex padding="3rem 5rem" {...props} bg="foreground" minW="100%">
        <Stack dir="column">
          <Box>
            <Image
              boxSize="4em"
              src="/assets/svg/logo.svg"
              alt="HoD logo"
            />
            <Text fontWeight="400" color="semiWhite" pt="0.5em">
              Hodl Or Die Copyright © 2023. All Rights Reserved
            </Text>
          </Box>
          <Box pt="1em">
            <Stack>
              <GroupContacts />
              <HStack gap="0.8em" height="1.5em">
                <Link fontSize=".8rem" fontWeight="500">
                  Legal Terms
                </Link>
                <Link fontSize=".8rem" fontWeight="500">
                  Privacy Policy
                </Link>
                <Link fontSize=".8rem" fontWeight="500">
                  Terms Of Use
                </Link>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </footer>
  );
}
