/// <reference types="cypress" />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to the specific product pages', () => {

        cy.visit("https://automationteststore.com")
        const makeupProductLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skinCare = cy.get("a[href*='product/category&path=']").contains('Skincare');
        makeupProductLink.click();
        
        const header = cy.get("h1 .maintext");
        
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
        
        // skinCare.click();
        // cy.log(header.text())

        //promises
        
    });
   
    
    it('Validate properties of the Contact us page', () => {
         cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        })

});