import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "Themes/global";
import { ButtonTheme } from "./button";

const themes = extendTheme({
  colors,
  fonts,
  components: {
    Button: ButtonTheme,
  },
});

export default themes;
