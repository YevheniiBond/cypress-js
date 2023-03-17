class HomePage_PO {
        visitHomePage(){
            cy.visit(Cypress.env("webdriveruni_hopepage"));
        }
}

export default HomePage_PO;