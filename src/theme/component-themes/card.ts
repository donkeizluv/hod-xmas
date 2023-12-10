import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "black.50",
    backdropFilter: "blur(10px)",
    borderRadius: "0.5rem",
    border: "solid",

    borderEndWidth: "1.5px",
    borderStartWidth: "1.5px",
    borderTopWidth: "1.5px",
    borderBlockEndWidth: "1.5px",

    borderEndColor: "white.10",
    borderTopColor: "white.10",
    borderStartColor: "white.10",
    borderBlockEndColor: "white.10",
  },
  // header: {
  //   paddingBottom: "2px",
  // },
  // body: {
  //   paddingTop: "2px",
  // },
  // footer: {
  //   paddingTop: "2px",
  // },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });
