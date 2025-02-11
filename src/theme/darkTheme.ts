// src/theme/darkTheme.ts
import { ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { baseThemeOptions } from './baseTheme'

export const darkThemeOptions: ThemeOptions = deepmerge(baseThemeOptions, {
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: {
      default:  '#121212',
      paper: '#1e1e1e',
    },
    grey: {
      50: '#2c2c2c',
      100: '#2a2a2a',
      200: '#252525',
      300: '#222222',
      400: '#1f1f1f',
      500: '#1c1c1c',
      600: '#191919',
      700: '#595958', // or #4a4a4a, or whichever you like for user bubble
      800: '#333333',
      900: '#0e0e0e',
    },
  },
})
