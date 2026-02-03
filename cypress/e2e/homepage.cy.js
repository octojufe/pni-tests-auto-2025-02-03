describe('Adresse - Accueil', () => {
  it('affiche un titre de niveau 1', () => {
    cy.visit('https://adresse.data.gouv.fr/')

    cy.findByRole('heading', { level: 1, name: 'La Base Adresse Nationale'})
  })

  it("permet d'accéder à la page Découvrir la BAN", () => {
    cy.visit('https://adresse.data.gouv.fr/')

    cy.findByRole('link', { name: "Découvrir la Base Adresse Nationale"})
        .click()

    cy.url().should('eq', 'https://adresse.data.gouv.fr/decouvrir-la-BAN')
  })
})
