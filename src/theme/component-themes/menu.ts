import { arimo } from "@/theme/fonts";
import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    py: "1rem",
    px: "0.75rem",
    borderRadius: "8px",
    borderWidth: "1.5px",
    borderStyle: "solid",
    fontFamily: arimo.style.fontFamily,
    fontWeight: 500,
    fontSize: "1.125rem",
    minWidth: "13.875rem",
    maxH: "3.25rem",
    textAlign: "start",
    borderColor: "white.10",
    bg: "white.10",
    _hover: {
      borderColor: "primary.800",
    },
  },
  list: {
    // this will style the MenuList component
    background: "black.60",
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "white.10",
    boxShadow:
      "0px 16px 24px rgba(0, 0, 0, 0.09), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
    backdropFilter: "blur(6px)",
    borderRadius: "8px",
  },
  item: {
    fontFamily: arimo.style.fontFamily,
    fontWeight: 500,
    fontSize: "1em",
    color: "semiWhite",
    bg: "transparent",
    borderRadius: "8px",
    // width: "95%",
    marginX: "auto",
    padding: "0.5em 1em",
    _hover: {
      bg: "white.10",
    },
    _focus: {
      bg: "white.10",
      color: "primary.400",
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    // this will style the MenuDivider component
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted",
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
