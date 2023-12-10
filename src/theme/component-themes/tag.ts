import { arimo } from "@/theme/fonts";
import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const lg = defineStyle({
  p: "0 0.75rem",
  fontSize: "25",
  minH: "2rem",
  gap: "0.5rem",
});

const hod = definePartsStyle({
  container: {
    bg: "accent.900",
    borderRadius: "6px",
    fontFamily: arimo.style.fontFamily,
    fontWeight: 700,
    fontSize: "0.813rem",
    letterSpacing: "0.031rem",
    color: "pureWhite",

    _hover: {
      borderWidth: "1.5px",
      borderStyle: "solid",
      borderColor: "white.20",
    },
    _active: {
      color: "primary.500",
      borderWidth: "1.5px",
      borderStyle: "solid",
      borderColor: "primary.700",
    },
  },
  closeButton: {
    m: "0",
  },
});

export const tagTheme = defineMultiStyleConfig({
  sizes: {
    "app.lg": definePartsStyle({ container: lg, label: lg }),
  },
  variants: {
    hod,
  },
  defaultProps: {
    size: "app.lg",
    variant: "hod",
  },
});
