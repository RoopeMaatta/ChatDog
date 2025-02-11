import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material'
import { createAppTheme } from './theme' // your theme factory function, e.g. createAppTheme(mode)

function Root() {
  // 1) Detect user preference using MUI's useMediaQuery
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  // 2) Create the theme object, picking 'dark' or 'light'
  const theme = createAppTheme(prefersDarkMode ? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

// Render it all
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
