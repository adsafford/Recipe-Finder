import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#43a047",
      light: "#76d275",
      dark: "#00701a",
    },
    secondary: {
      main: "#a1887f",
    },
    background: {
      default: "#9e9e9e",
    },
  },
});

export default mainTheme;
