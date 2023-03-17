import HomePage_PO from "../../support/page_objects/webdriver-uni/homePage_PO";
/// <reference types= "cypress" />


describe('Page object model', () => {
   
    beforeEach(function () {
    const homePage_PO = new HomePage_PO();
    
    homePage_PO.visitHomePage();
   })

})