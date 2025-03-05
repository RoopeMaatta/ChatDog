import { Card, Typography } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'
import { Button } from '@mui/material'

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
      <Link to='/'> Click to go home u drunk </Link>
      <Button component={Link} to='chat' variant='contained'>
        Go to Chat
      </Button>
      <Outlet />
    </>
  )
}
