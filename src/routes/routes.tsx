import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../components/pages/HomePage'
import ChatPage from '../components/pages/ChatPage'
import NotFoundPage from '../components/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/login',
    element: <div>Login meeeee</div>,
  },
])
