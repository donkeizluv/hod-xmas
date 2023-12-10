import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const lg = defineStyle({
  border: "1.5px solid!",
});
const hod = defineStyle({
  w: "85%",
  borderColor: "white.10",
  alignSelf: "center",
});

export const dividerTheme = defineStyleConfig({
  variants: { hod },
  sizes: { "app.lg": lg },
  defaultProps: {
    size: "app.lg",
    variant: "hod",
  },
});
