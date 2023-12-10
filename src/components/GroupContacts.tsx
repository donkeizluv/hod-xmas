import React from "react";
import { Box, HStack, Link, Image } from "@chakra-ui/react";

const GroupContacts = () => {
  const xLink = process.env.NEXT_PUBLIC_X_LINK;
  const discordLink = process.env.NEXT_PUBLIC_DISCORD_LINK;
  // const threadsLink = process.env.NEXT_PUBLIC_THREADS_LINK;

  return (
    <HStack gap="1em" height="2em">
      <Link href={xLink} isExternal>
        <Box
          borderRadius="10px"
          width="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#2b2b30"
          height="2rem"
          color="accent.50"
        >
          <Image
            w="1rem"
            height="1rem"
            src="/assets/icons/social-x.svg"
            alt="X logo"
          />
        </Box>
      </Link>
      <Link href={discordLink} isExternal>
        <Box
          borderRadius="10px"
          width="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#2b2b30"
          height="2rem"
          color="accent.50"
        >
          <Image
            w="2rem"
            height="2rem"
            src="/assets/icons/social-discord.svg"
            alt="X logo"
          />
        </Box>
      </Link>
      {/* <Link href={threadsLink} isExternal>
        <Box
          borderRadius="10px"
          width="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#2b2b30"
          height="2rem"
          color="accent.50"
        >
          <Image
            w="2rem"
            height="2rem"
            src="/assets/icons/social-threads.svg"
            alt="X logo"
          />
        </Box>
      </Link> */}
    </HStack>
  );
};

export default GroupContacts;
