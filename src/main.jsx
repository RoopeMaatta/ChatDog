import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material'
import { createAppTheme } from './theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

function Root() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createAppTheme(prefersDarkMode ? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
