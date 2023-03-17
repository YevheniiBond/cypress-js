/// <reference types="cypress" />

describe(" Test Contact Us from via WebDriverUni", () => {
 it(" Should be able to submit a succesful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com");
        cy.get('textarea.feedback-input').type('How can I learn Cypress?');
        cy.get('[type="submit"]').click();
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
    })
});

