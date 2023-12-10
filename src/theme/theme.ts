import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { anybody, arimo } from "./fonts";
import { sizes as textSizes } from "./component-themes/text";
import * as componentThemes from "./component-themes";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  semanticTokens: {
    colors: {
      ...colors.primary,
      ...colors.secondary,
      ...colors.accent,
      ...colors.text.black,
      ...colors.text.white,
      ...colors.background,
      ...colors.blackOpacity,
      ...colors.whiteOpacity,
      ...colors.danger,
      ...colors.warning,
      ...colors.info,
      ...colors.success,
    },
  },
  styles: {
    // overriding fonts has heigher weight
    global: {
      body: {
        color: "pureWhite",
        bg: "background",
        letterSpacing: "0.005em",
        lineHeight: "1.313rem",
      },
      a: {
        fontFamily: arimo.style.fontFamily,
        fontWeight: 600,
        color: "neutralWhite",
      },
    },
  },
  fonts: {
    heading: anybody.style.fontFamily,
    body: anybody.style.fontFamily,
    mono: anybody.style.fontFamily,
  },
  textStyles: { ...textSizes },
  components: {
    Button: componentThemes.buttonTheme,
    Menu: componentThemes.menuTheme,
    Input: componentThemes.inputTheme,
    Tag: componentThemes.tagTheme,
    Text: componentThemes.textTheme,
    Modal: componentThemes.modalTheme,
    Tabs: componentThemes.tabsTheme,
    Icon: {
      baseStyle: {
        color: "accent.50",
      },
    },
    // doesnt work?
    // Divider: DividerTheme,
    Link: {
      baseStyle: {
        color: "neutralWhite",
      },
    },
    Heading: componentThemes.headingTheme,
    Card: componentThemes.cardTheme,
    Popover: componentThemes.popoverTheme,
  },
  config,
});

export default theme;
