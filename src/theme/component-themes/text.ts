import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { arimo, anybody } from "@/theme/fonts";

export const sizes = {
  b1: defineStyle({
    fontSize: "1.125rem",
    fontWeight: "400",
    lineHeight: "1.813rem",
  }),
  "b1.b": defineStyle({
    fontSize: "1.125rem",
    fontWeight: "700",
    lineHeight: "1.813rem",
  }),
  b2: defineStyle({
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.438rem",
  }),
  "b2.b": defineStyle({
    fontSize: "0.875rem",
    fontWeight: "700",
    lineHeight: "1.438rem",
  }),

  p1: defineStyle({
    fontSize: "1.125rem",
    fontWeight: "400",
    lineHeight: "1.813rem",
  }),
  p2: defineStyle({
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.625rem",
  }),

  c: defineStyle({
    fontSize: "0.813rem",
    fontWeight: "400",
    lineHeight: "1.313rem",
  }),
  "c.b": defineStyle({
    fontSize: "0.813rem",
    fontWeight: "700",
    lineHeight: "1.313rem",
  }),

  "b.lg": defineStyle({
    fontSize: "1.125rem",
    fontWeight: "600",
    lineHeight: "1.125rem",
  }),

  "b.md": defineStyle({
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1rem",
  }),
  "b.sm": defineStyle({
    fontSize: "0.813rem",
    fontWeight: "700",
    lineHeight: "0.813rem",
  }),

  "i.lg": defineStyle({
    fontSize: "1.125rem",
    fontWeight: "500",
    lineHeight: "1rem",
  }),

  "i.md": defineStyle({
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "0.75rem",
  }),
  "i.sm": defineStyle({
    fontSize: "0.813rem",
    fontWeight: "600",
    lineHeight: "0.813rem",
  }),
  h1: defineStyle({
    fontSize: "3.25rem",
    fontWeight: "700",
    lineHeight: "3.25rem",
  }),
  h2: defineStyle({
    fontSize: "2.625rem",
    fontWeight: "700",
    lineHeight: "2.625rem",
  }),
  h3: defineStyle({
    fontSize: "2.125rem",
    fontWeight: "700",
    lineHeight: "2.125rem",
  }),
  h4: defineStyle({
    fontSize: "1.688rem",
    fontWeight: "700",
    lineHeight: "1.688rem",
  }),
  h5: defineStyle({
    fontSize: "1.375rem",
    fontWeight: "700",
    lineHeight: "1.375rem",
  }),
  h6: defineStyle({
    fontSize: "1.225rem",
    fontWeight: "700",
    lineHeight: "1.3rem",
  }),
  table: defineStyle({
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.438rem",
  }),
  subtext: defineStyle({
    fontSize: "0.813rem",
    fontWeight: "400",
    lineHeight: "1.313rem",
  }),
  supportedText: defineStyle({
    fontSize: "0.688rem",
    fontWeight: "400",
    lineHeight: "1.125rem",
  }),
  caption: defineStyle({
    fontSize: "0.813rem",
    fontWeight: "400",
    lineHeight: "1.313rem",
  }),
};

export const textTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: arimo.style.fontFamily,
  },
  sizes: sizes,
  variants: {
    body: {
      fontFamily: anybody.style.fontFamily,
    },
    paragraph: {
      fontFamily: arimo.style.fontFamily,
    },
    caption: {
      fontFamily: arimo.style.fontFamily,
    },
    button: {
      fontFamily: arimo.style.fontFamily,
    },
    input: {
      fontFamily: arimo.style.fontFamily,
    },
    table: {
      fontFamily: arimo.style.fontFamily,
    },
  },
  defaultProps: {
    size: "b2",
    variant: "paragraph",
  },
});
