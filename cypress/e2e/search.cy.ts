describe('sdd product to cart', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')
    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit the search page without a query', () => {
    // Tratando o NEXTREDIRECT, que faz a navegação emitindo uma exception
    cy.on('uncaught:exception', () => {
      return false
    })
    cy.visit('/search')
    cy.location('pathname').should('equal', '/')
  })
})
