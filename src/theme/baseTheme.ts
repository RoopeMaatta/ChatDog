// src/theme/baseTheme.ts
import { ThemeOptions } from '@mui/material/styles'

export const baseThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 10, // This applies **only** to components that respect shape.borderRadius (NOT MuiButton)
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24, // <-- Override specifically for buttons
        },
      },
    },
  },

  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  },
}
