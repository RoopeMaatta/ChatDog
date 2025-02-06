import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatBox from '../src/components/chatBox'


test('test box and send button work correctly', async () => {
  render(<ChatBox />)
  // Set chat textbox active
  const inputElement = screen.getByPlaceholderText(/Type your message/i)
  const buttonElement = screen.getByTestId('send-button')
  // Write into chat box: "Potata say something"
  fireEvent.change(inputElement, {
    target: { value: 'Potata say something' },
  })
  // Press send button
  fireEvent.click(buttonElement)
  // Assert response is "Plz givez chatDog brain so he can respond to: Potata say something"
  await waitFor(() => {
    const responseElement = screen.getByText(
      /Plz givez chatDog brain so he can respond to: Potata say something/i
    )
  })
  //expect(responseElement).toBeInTheDocument()
})
