// cypress/e2e/chatbot.cy.ts

describe('Chatbot Interactive Box Test', () => {
  beforeEach(() => {
    // Adjust URL as needed (localhost port, etc.)
    cy.visit('http://localhost:5173/')
  })

  it('should send a message and verify the chatbot response', () => {
    // 1. Type message into the input
    cy.get('[data-testid="chat-input"]')
      .should('be.visible')
      .type('Potata say something')

    // 2. Press the send button
    cy.get('[data-testid="send-button"]')
      .should('be.visible')
      .click()

    // 3. Verify the bot's message appears
    // Because the bot response is delayed by setTimeout(1000),
    // Cypress will automatically retry the assertion until it passes or times out.
    cy.get('[data-testid="chat-response"]').should(
      'contain',
      'Plz givez chatDog brain so he can respond to: Potata say something'
    )
  })
})
