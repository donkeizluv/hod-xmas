import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const hod = defineStyle({
  content: {
    padding: "0.5rem",
    backgroundColor: "background",
    borderColor: "white.10",
  },
  arrow: {
    bg: "background!",
    color: "background",
  },
  header: {
    border: "none",
  },
});

export const popoverTheme = defineMultiStyleConfig({
  variants: { hod },
  defaultProps: {
    variant: "hod",
  },
});
