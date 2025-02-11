// src/theme/index.ts
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { lightThemeOptions } from './lightTheme'
import { darkThemeOptions } from './darkTheme'
import { PaletteMode } from '@mui/material'

export const createAppTheme = (mode: PaletteMode): Theme => {
  const themeOptions: ThemeOptions =
    mode === 'light' ? lightThemeOptions : darkThemeOptions

  // Create the final theme using MUI's createTheme
  return createTheme(themeOptions)
}
