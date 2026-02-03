describe('Homepage', () => {
  it('should redirect to article page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.visit('https://www.cnrs.fr/fr')
    cy.findByRole("link", { name: "Les ports de commerce ultramarins, lieux géostratégiques exceptionnels en transition" })
        .click()

    cy.url()
        .should('eq', 'https://www.cnrs.fr/fr/actualite/les-ports-de-commerce-ultramarins-lieux-geostrategiques-exceptionnels-en-transition') // => true
  })
})
