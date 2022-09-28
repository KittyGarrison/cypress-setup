describe('The Home Page', () => {
    it('successfully loads', ()=> {
        cy.intercept('GET', '/').as('homePageCall')
        cy.visit('/')
        cy.wait('@homePageCall').then(({response}) => {
        cy.percySnapshot('Homepage test');
    expect(response.statusCode).to.eq(200)
  })
    })
})
