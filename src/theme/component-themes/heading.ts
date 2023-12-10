import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { anybody } from "../fonts";

const hod = defineStyle({
  color: "pureWhite",
  fontFamily: anybody.style.fontFamily,
});

const h1 = defineStyle({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "3.25rem",
  lineHeight: "4.0625rem",
});

const h2 = defineStyle({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "2.625rem",
  lineHeight: "3.25rem",
});

const h3 = defineStyle({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "2.125rem",
  lineHeight: "2.625rem",
});

const h4 = defineStyle({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.688rem",
  lineHeight: "2.125rem",
});

const h5 = defineStyle({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.375rem",
  lineHeight: "1.75rem",
});

export const headingTheme = defineStyleConfig({
  sizes: { h1, h2, h3, h4, h5 },
  variants: { hod },
  defaultProps: {
    size: "h1",
    variant: "hod",
  },
});
