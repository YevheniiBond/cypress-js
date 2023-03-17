/// <reference types="cypress" />

describe(" Test Contact Us from via WebDriverUni", () => {
 it(" Should be able to submit a succesful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
    })
});

