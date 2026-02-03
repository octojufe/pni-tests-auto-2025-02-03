describe('Homepage', () => {
  it('should redirect to article page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.visit('https://beta.gouv.fr/')
    cy.findByRole("heading", { level: 1, name: "Construisons ensemble les services publics numériques de demain" })
        .should('exist')
  })
})
