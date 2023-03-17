describe('Locator demo', () => {
    it('visit application', () => {
        cy.visit('https://megamarket.zakaz.ua/uk/')
        cy.xpath('//button[@data-testid="sign_in_button"]').click()
        cy.get('#login-data').type('+380665631180')
        cy.get('#login-password').type('Pipetka1993')
        cy.xpath('(//button[@data-marker="Sign in"])[3]').click()
    })
})