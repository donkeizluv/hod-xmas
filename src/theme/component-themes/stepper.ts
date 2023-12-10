import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const stepperTheme = defineStyleConfig({
  variants: {
    primary: {
      indicator: {
        borderRadius: "50%",
        _active: {
          borderRadius: "10%",
        },
      },
    },
  },
});
