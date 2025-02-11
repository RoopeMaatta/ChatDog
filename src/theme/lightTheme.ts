// src/theme/lightTheme.ts
import { ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { baseThemeOptions } from './baseTheme'

export const lightThemeOptions: ThemeOptions = deepmerge(baseThemeOptions, {
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    // Optionally override some grey swatches for user messages, etc.
    // MUI defaults are decent, but you can override them:
    grey: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057', // <--- for user bubble
      800: '#343a40',
      900: '#212529',
    },
  },
})
