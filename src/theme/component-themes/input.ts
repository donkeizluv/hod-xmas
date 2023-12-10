import { arimo } from "@/theme/fonts";
import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const lg = defineStyle({
  fontSize: "1.125rem",
  fontWeight: 500,
  p: "1rem 0.75rem",
  maxH: "3.25rem",
});
const md = defineStyle({
  fontSize: "1rem",
  fontWeight: 500,
  p: "1rem 0.75rem",
  maxH: "2.75rem",
});
const sm = defineStyle({
  fontSize: "0.813rem",
  letterSpacing: "0.031rem",
  fontWeight: 600,
  p: "0.625rem 0.75rem",
  maxH: "2.25rem",
});

const sizes = {
  "app.lg": definePartsStyle({ field: lg }),
  "app.md": definePartsStyle({ field: md }),
  "app.sm": definePartsStyle({ field: sm }),
};

const hod = definePartsStyle({
  field: {
    fontFamily: arimo.style.fontFamily,
    gap: "0.25rem",
    background: "white.10",
    borderWidth: "1.5px",
    borderStyle: "solid",
    color: "neutralWhite",
    borderRadius: "8px",

    _hover: {
      borderColor: "primary.800",
      color: "pureWhite",
    },
    _focus: {
      color: "pureWhite",
    },
    _invalid: {},
  },
});

const variantCustom = definePartsStyle((props) => {
  return {
    field: {
      fontFamily: arimo.style.fontFamily,
      gap: "0.25rem",
      background: "white.10",
      borderWidth: "1.5px",
      borderStyle: "solid",
      color: "neutralWhite",
      borderRadius: "8px",
    },
    _readOnly: {
      display: "inline-block",
      verticalAlign: "bottom",
      whiteSpace: "nowrap",
      width: "100%",
      maxWidth: "90px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };
});
const variants = {
  hod,
  custom: variantCustom,
};

export const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    size: "app.lg",
    variant: "hod",
  },
  variants: variants,
  sizes,
});
