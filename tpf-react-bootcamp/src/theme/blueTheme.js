import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#223154'
    },
    secondary: {
      main: '#385384'
    },
    error: {
      main: red.A400
    }
  }
})