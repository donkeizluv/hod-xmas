import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { arimo } from "../fonts";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontFamily: arimo.style.fontFamily,
  },
  tabpanel: {
    fontFamily: arimo.style.fontFamily,
  },
});

export const tabsTheme = defineMultiStyleConfig({ baseStyle });
