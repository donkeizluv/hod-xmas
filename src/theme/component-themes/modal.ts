import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: "md",
    bg: `modal`,
    padding: "2.25rem 2rem",
  },
  footer: {
    padding: "0",
  },
  body: {
    padding: "0",
  },
});
export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
