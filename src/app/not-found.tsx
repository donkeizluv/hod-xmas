"use client";

import FitLayout from "@/components/Layouts/FitLayout";
import { Flex, Heading, Image } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <FitLayout>
      <Flex align="center" textAlign="center" flexDirection="column" mt="15rem">
        <Heading
          size={{
            base: "h4",
            md: "h3",
          }}
        >
          Nothing to see here...
        </Heading>
        <Image minW="20rem" src="/assets/svg/not_found_bg.svg" alt="404" />
      </Flex>
    </FitLayout>
  );
}
