describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
    cy.contains('.filesize', '117.74 MB')
  })
})
