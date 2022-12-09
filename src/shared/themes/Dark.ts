import { createTheme } from '@mui/material'
import { purple, pink } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[800],
      dark: purple[900],
      light: purple[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: pink[800],
      dark: pink[900],
      light: pink[600],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    }
  }
})