import { Card, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Typography
        variant='h3'
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.primary',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '20vh',
          p: 3,
        }}
      >
        ChatDog Potata
      </Typography>
      <Outlet />
    </>
  )
}
