// frontend/src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#f4f4f4",
        color: "#333",
        fontFamily: "Poppins, sans-serif",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
