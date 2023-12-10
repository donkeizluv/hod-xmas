import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { arimo } from "@/theme/fonts";

const sizes = {
  "app.lg": defineStyle({
    fontSize: "1.125rem",
    fontWeight: "600",
    maxH: "3.25rem",
    padding: "0.875rem 0.75rem",
  }),

  "app.md": defineStyle({
    fontSize: "1rem",
    fontWeight: "600",
    maxH: "2.75rem",
    padding: "0.75rem",
  }),
  "app.sm": defineStyle({
    fontSize: "0.813rem",
    fontWeight: "700",
    maxH: "2.25rem",
    padding: "0.625rem 0.75rem",
  }),

  "side.lg": defineStyle({
    width: "3.25rem",
    height: "3.25rem",
    borderRadius: "1.625rem",
  }),
  "side.md": defineStyle({
    width: "2.75rem",
    height: "2.75rem",
    borderRadius: "1.375rem",
  }),
  "side.sm": defineStyle({
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: "1.125rem",
  }),

  "link.lg": defineStyle({
    height: "4rem",
    width: "4rem",
    borderRadius: "1.375rem",
    fontSize: "1.875rem",
  }),
};
const _disabled = {
  color: "disabledWhite",
  borderColor: "accent.800",
  bg: "accent.800",
};

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: arimo.style.fontFamily,
    color: "neutralWhite",
    borderRadius: "8px",
    background: "white.10",
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "white.10",
    _disabled,
  },
  sizes: sizes,
  variants: {
    primary: {
      bg: "primary.500",
      color: "semiBlack",
      borderColor: "primary.500",
      _hover: {
        bg: "primary.700",
        borderColor: "primary.700",
        _disabled,
      },
      _active: {
        bg: "primary.600",
        borderColor: "primary.600",
      },
    },
    secondary: {
      bg: "accent.900",
      color: "primary.300",
      borderColor: "primary.300",
      _hover: {
        bg: "accent.800",
        borderColor: "primary.600",
        _disabled,
      },
      _active: {
        bg: "accent.900",
        borderColor: "primary.700",
      },
    },
    tertiary: {
      bg: "accent.900",
      color: "primary.500",
      borderColor: "accent.900",
      _hover: {
        color: "primary.600",
        bg: "accent.800",
        borderColor: "accent.800",
        _disabled,
      },
      _active: {
        color: "primary.700",
        borderColor: "accent.900",
        bg: "accent.900",
      },
    },
    danger: {
      bg: "danger.400",
      color: "white",
      borderColor: "danger.400",
      _hover: {
        color: "white",
        bg: "danger.300",
        borderColor: "danger.300",
        _disabled,
      },
      _active: {
        color: "white",
        borderColor: "danger.400",
        bg: "danger.400",
      },
    },
    icon: {
      bg: "none",
      color: "none",
      borderColor: "none",
      borderWidth: "0px",
      _active: {
        color: "none",
        border: "none",
        outline: "none",
        borderColor: "none",
        borderWidth: "none",
      },
    },
    avatar: {
      bg: "background",
      color: "none",
      height: "2.5rem",
      width: "2.5rem",
      borderRadius: "50%",
    },
    side: {
      border: "none",
      bg: "white.10",
      color: "accent.500",
      stroke: "accent.500",
      _hover: {
        stroke: "primary.500",
      },
      _active: {
        stroke: "primary.500",
      },
    },
  },
});
